import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './fontend/product/product.component';
import { HomeComponent } from './fontend/home/home.component';
import { AdminComponent } from './backend/admin/admin.component';
import { ProductsComponent } from './fontend/products/products.component';




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
    path:'manager',
    component: AdminComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
