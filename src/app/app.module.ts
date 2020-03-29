import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { DealComponent } from './deal/deal.component';
import { BrandComponent } from './brand/brand.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
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
