import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MycartComponent } from './mycart/mycart.component';

const routes: Routes = [
  {path:'',redirectTo:"/dashboard",pathMatch:"full"},
  {path:"admin",component:AdminComponent},
  {path:"products/:categoryid",component:ProductsComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"mycart",component:MycartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
