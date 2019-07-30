import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './screens/home/home.component';
import { DetailCateComponent } from './screens/detail-cate/detail-cate.component';
import { EditCateComponent } from './screens/edit-cate/edit-cate.component';
import { CateAddComponent } from './screens/cate-add/cate-add.component';
import { CateEditComponent } from './screens/cate-edit/cate-edit.component';

import { from } from 'rxjs';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"detail/:id",
    component:DetailCateComponent
  },
  {
    path:"category/add",
    component:CateAddComponent
  },
  {
    path:"cate-edit/:id",
    component:CateEditComponent
  },
  {
    path:"detail-cate/:id",
    component:DetailCateComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
