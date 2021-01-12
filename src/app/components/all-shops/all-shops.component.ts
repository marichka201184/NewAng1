import {Component, NgModule} from '@angular/core';
import {IShop} from '../../interfaces/shop.interface';
import {ActivatedRoute} from '@angular/router';
import {ShopService} from '../../services/shop.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-all-shops',
  templateUrl: './all-shops.component.html',
  styleUrls: ['./all-shops.component.css']
})
export class AllShopsComponent  {

  shopsList: IShop[] = [];
  form: FormGroup;
  formUpdate: FormGroup;


     constructor(private activatedRoute: ActivatedRoute,
                 private shopService: ShopService,
                 private appComp: AppComponent
  ) {
       this.activatedRoute.data.subscribe(value => console.log(value));

       this.activatedRoute.data.subscribe(value => this.shopsList = value.xxx);

       this.form = new FormGroup({
       name: new FormControl(''),
       address: new FormControl('')
       });
       this.formUpdate = new FormGroup({
       Newaddress: new FormControl('')

        });
       }

     save(form: FormGroup): void {
     this.shopService.create(form.getRawValue()).subscribe(() => this.appComp.ngOnInit());
     }

}
