import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule } from './components/app-routing.module';
import {RouterModule} from '@angular/router';
import {ShopResolveService} from './services/shop-resolve.service';
import {AllShopsComponent} from './components/all-shops/all-shops.component';
import {ShopComponent} from './components/shop/shop.component';
import {ItemComponent} from './components/items/item.component';



@NgModule({
  declarations: [
    AppComponent,
    AllShopsComponent,
    ShopComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'shops', component: AllShopsComponent, resolve: {xxx: ShopResolveService}},
    ])
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

