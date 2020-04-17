import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './fontend/product/product.component';
import { HomeComponent } from './fontend/home/home.component';
import { AdminComponent } from './backend/admin/admin.component';
import { ProductsComponent } from './fontend/products/products.component';
import { AdminDashboardComponent } from './backend/admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './backend/admin-products/admin-products.component';




const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full',
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'products',
    component: ProductsComponent,
  },
  {
    path:'product/:id',
    component: ProductComponent,
  },

  {
    path:'admin',
    component: AdminComponent,
    children: [
      {path:"", redirectTo: "dashboard", pathMatch:"full"},
      {path:"dashboard", component: AdminDashboardComponent},
      {path:"products", component: AdminProductsComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
