import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compenent/home/home.component';
import { ShopComponent } from './compenent/shop/shop.component';
import { CartComponent } from './compenent/cart/cart.component';
import { LoginRepassComponent } from './compenent/login-repass/login-repass.component';
import { ProductDetailComponent } from './compenent/product-detail/product-detail.component';

import { ProfileComponent } from './compenent/profile/profile.component';
import { LoginGuard } from './guard/login.guard';
import { BaoveGuard } from './guard/baove.guard';
import { AdminGuard } from './guard/admin.guard';
import { LoginAdminComponent } from './compenent/login-admin/login-admin.component';
import { CheckoutComponent } from './compenent/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'login',

    component: LoginRepassComponent,
    canActivate: [LoginGuard]
  }
  ,
  {
    path: 'detail/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [BaoveGuard]
  },
  {
    path: 'loginadmin',
    component: LoginAdminComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [BaoveGuard]
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
