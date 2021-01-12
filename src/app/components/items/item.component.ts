import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import {ShopService} from '../../services/shop.service';
import {IItem} from '../../interfaces/item.interface';
import {FormControl, FormGroup} from '@angular/forms';
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  items: IItem[];
  item: IItem;
  form: FormGroup;
  formUpdate: FormGroup;

  constructor(private itemService: ItemService,
              private appComp :AppComponent)
  {
      this.form= new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      shop_name : new FormControl('')
    })
      this.formUpdate= new FormGroup({
      Newprice: new FormControl(''),

    })
  }
  save(form: FormGroup): void {
     this.itemService.create(form.getRawValue()).subscribe(() => this.appComp.ngOnInit());
  }

  del(id: number): void {
    this.itemService.delete(id).subscribe( () => this.appComp.ngOnInit());
  }

  update(id: number, formUpdate: FormGroup):void {
    console.log(this.formUpdate.controls.Newprice.value);
    console.log(id);
    this.itemService.getItem(id, this.formUpdate.controls.Newprice.value).subscribe( ()=> this.appComp.ngOnInit());
    }


}

