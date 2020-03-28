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
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminTopbarComponent } from './admin-topbar/admin-topbar.component';
import { AdminStatisticalComponent } from './admin-statistical/admin-statistical.component';
import { HomeComponent } from './home/home.component';
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
    AdminSidebarComponent,
    AdminComponent,
    AdminTopbarComponent,
    AdminStatisticalComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
