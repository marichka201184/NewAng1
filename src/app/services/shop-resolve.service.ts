import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {IShop} from '../interfaces/shop.interface';
import {Observable} from 'rxjs';
import {ShopService} from '../services/shop.service';

@Injectable({
  providedIn: 'root'
})
export class ShopResolveService implements Resolve<IShop[]> {


  constructor(private shopService: ShopService) {
  }

  resolve(): Observable<IShop[]> | Promise<IShop[]> | IShop[] {
    return this.shopService.getAll();
  }


}
