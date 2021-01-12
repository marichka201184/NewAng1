import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services';
import {ShopService} from '../services/shop.service';
import {IShop} from '../interfaces/shop.interface';
import {IItem} from '../interfaces/item.interface';
import {FormControl, FormGroup} from '@angular/forms';
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  shops: IShop[];
  shop: IShop;
  items: IItem[];

constructor(private shopService: ShopService,
            private itemService: ItemService) {
}
    ngOnInit(): void{
    this.shopService.getAll().subscribe(value => this.shops = value);
    this.itemService.getAll().subscribe(value => this.items = value);
  }
}

