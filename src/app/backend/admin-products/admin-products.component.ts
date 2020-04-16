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
    this.productService.getProducts().subscribe(data => {
     console.log(data);
     this.products = data;
    });
  }
   removeItem(id){
    // this.productService.removeProduct(id);
  }
}