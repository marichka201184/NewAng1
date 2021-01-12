import {Component, Input, OnInit} from '@angular/core';
import {IShop} from '../../interfaces/shop.interface';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ShopService} from '../../services/shop.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AppComponent} from '../app.component';
import {ItemService} from '../../services';
import {IItem} from '../../interfaces/item.interface';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  @Input()
  shop: IShop;
  item: IItem;
  items: IItem[];
  form: FormGroup;
  formUpdate: FormGroup;
  formItemUpdate: FormGroup;
  formItem: FormGroup;

  constructor(private shopService: ShopService,
              private itemService: ItemService,
              private appComp: AppComponent)
  {
    {
       this.formUpdate = new FormGroup({
       Newaddress: new FormControl('')

        });
       this.formItemUpdate = new FormGroup({
       Newprice: new FormControl('')

        });
       this.formItem = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      shop_name: new FormControl('')
    });
    }
  }
     del(id: number): void {
     console.log(id);
     this.shopService.delete(id).subscribe( () => this.appComp.ngOnInit());
     }

       update(id: number, formUpdate: FormGroup): void {
       console.log(this.formUpdate.controls.Newaddress.value);
       console.log(id);
       this.shopService.getShop(id, this.formUpdate.controls.Newaddress.value).subscribe( () => this.appComp.ngOnInit());
     }

     getItemByShopId(id: number): void {
     console.log(id);
     this.itemService.getItemShop(id).subscribe(value => this.items = value);
}
     save(formItem: FormGroup): void {
     this.itemService.create(formItem.getRawValue()).subscribe(() => this.appComp.ngOnInit());
  }
     delItem(id: number): void {
    this.itemService.delete(id).subscribe( () => this.appComp.ngOnInit());
  }

    updateItem(id: number, formItemUpdate: FormGroup):void {
    console.log(this.formItemUpdate.controls.Newprice.value);
    console.log(id);
    this.itemService.getItem(id, this.formItemUpdate.controls.Newprice.value).subscribe( () => this.appComp.ngOnInit());
    }

}
