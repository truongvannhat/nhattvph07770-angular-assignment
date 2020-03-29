import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';




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
    path:'product/:productID',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
