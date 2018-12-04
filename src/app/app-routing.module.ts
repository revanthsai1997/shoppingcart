import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent},
  {path:"products/:categoryid",component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
