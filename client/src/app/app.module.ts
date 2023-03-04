import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compenent/home/home.component';
import { CartComponent } from './compenent/cart/cart.component';
import { ShopComponent } from './compenent/shop/shop.component';
import { LoginRepassComponent } from './compenent/login-repass/login-repass.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './compenent/product-detail/product-detail.component';
import { HeaderComponent } from './compenent/header/header.component';
import { FooterComponent } from './compenent/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadersInterceptor } from './headers.interceptor';
import { ProfileComponent } from './compenent/profile/profile.component';
import { LoginAdminComponent } from './compenent/login-admin/login-admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckoutComponent } from './compenent/checkout/checkout.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ShopComponent,
    LoginRepassComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    LoginAdminComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true},
    [DatePipe]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
