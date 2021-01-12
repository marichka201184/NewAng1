import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IItem} from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
URL = 'http://localhost:8000/shop/item';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IItem[]> {
    return this.httpClient.get<IItem[]>(`${this.URL}`);
  }

  create(data: IItem): Observable<void>{
    return this.httpClient.post<void>(`${this.URL}`, data)
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete(`${this.URL}/${id}`)
  }

  getItem(id: number, body:number):Observable<any>{
    return this.httpClient.patch(`${this.URL}/${id}`,{"price":body});
  }

  getItemShop(id: number): Observable<IItem[]> {
    return this.httpClient.get<IItem[]>(`${this.URL}/${id}`);
  }
}
