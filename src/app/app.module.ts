import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './fontend/header/header.component';
import { FooterComponent } from './fontend/footer/footer.component';
import { BannerComponent } from './fontend/banner/banner.component';
import { FeaturesComponent } from './fontend/features/features.component';
import { ProductsComponent } from './fontend/products/products.component';
import { CategoryComponent } from './fontend/category/category.component';
import { DealComponent } from './fontend/deal/deal.component';
import { BrandComponent } from './fontend/brand/brand.component';
import { HomeComponent } from './fontend/home/home.component';
import { AdminDashboardComponent } from './backend/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './backend/admin/admin.component';
import { AdminProductsComponent } from './backend/admin-products/admin-products.component';
import { ProductService } from './product.service';
import { ProductComponent } from './fontend/product/product.component';
import { TopbarComponent } from './backend/topbar/topbar.component';
import { SidebarComponent } from './backend/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    FeaturesComponent,
    ProductsComponent,
    CategoryComponent,
    DealComponent,
    BrandComponent,
    HomeComponent,
    AdminDashboardComponent,
    AdminComponent,
    AdminProductsComponent,
    ProductComponent,
    TopbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
