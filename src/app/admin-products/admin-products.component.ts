import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import { Product } from '../Product';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Product[];


  constructor(
    private productService: ProductService
  ) {
    console.log('constructor')
   }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.products = this.productService.getProducts();
  }
   removeItem(id){
    // this.productService.removeProduct(id);
    this.products = this.products.filter(product => product.id != id);
  }
}