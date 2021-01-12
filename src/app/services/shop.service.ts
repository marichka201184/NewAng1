import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IShop} from '../interfaces/shop.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
URL = 'http://localhost:8000/shop';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IShop[]> {
    return this.httpClient.get<IShop[]>(`${this.URL}`);
  }

  create(data: IShop): Observable<void>{
    return this.httpClient.post<void>(`${this.URL}`,data)
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete(`${this.URL}/${id}`)
  }

  getShop(id: number, body: number): Observable<any>{
    return this.httpClient.patch(`${this.URL}/${id}`,{"address": body});
  }
}
