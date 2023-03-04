import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductComponent } from './component/product/product.component';
import { CategoryComponent } from './component/category/category.component';
import { UserComponent } from './component/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CateAddComponent } from './component/cate-add/cate-add.component';
import { CateEditComponent } from './component/cate-edit/cate-edit.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { UserEditComponent } from './component/user-edit/user-edit.component';
import { UserAddComponent } from './component/user-add/user-add.component';
import { OderComponent } from './component/oder/oder.component';
import { OderEditComponent } from './component/oder-edit/oder-edit.component';




@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    ProductComponent,
    CategoryComponent,
    UserComponent,
    CateAddComponent,
    CateEditComponent,
    ProductAddComponent,
    ProductEditComponent,
    UserEditComponent,
    UserAddComponent,
    OderComponent,
    OderEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class AdminModule { }
