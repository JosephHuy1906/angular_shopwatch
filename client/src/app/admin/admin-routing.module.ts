import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserComponent } from './component/user/user.component';
import { ProductComponent } from './component/product/product.component';
import { CategoryComponent } from './component/category/category.component';
import { CateEditComponent } from './component/cate-edit/cate-edit.component';
import { CateAddComponent } from './component/cate-add/cate-add.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { PhanquyenGuard } from './guard/phanquyen.guard';
import { UserEditComponent } from './component/user-edit/user-edit.component';
import { UserAddComponent } from './component/user-add/user-add.component';
import { OderComponent } from './component/oder/oder.component';
import { OderEditComponent } from './component/oder-edit/oder-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,

  },
  {
    path: 'user',

    children: [
      {
        path: '',
        component: UserComponent,
      },
      {
        path: 'edit/:id',
        component: UserEditComponent,
      },
      {
        path: 'add',
        component: UserAddComponent
      }
    ],
    canActivate: [PhanquyenGuard]
  },
  {
    path: 'product',
    children: [
      {
        path: '',
        component: ProductComponent
      },
      {
        path: 'add',
        component: ProductAddComponent
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent
      }
    ]
  },
  {
    path: 'category',
    children: [
      {
        path: '',
        component: CategoryComponent,
      },
      {
        path: 'edit/:id',
        component: CateEditComponent
      },
      {
        path: 'add',
        component: CateAddComponent
      }
    ],
    canActivate: [PhanquyenGuard]
  },
  {
    path: 'oder',
    component: OderComponent
  },{
    path: 'oder/edit/:id',
    component: OderEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
