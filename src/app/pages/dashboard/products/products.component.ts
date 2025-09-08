import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductsService } from '../../../products.service';
import { Router, RouterOutlet, withViewTransitions } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ProductsService],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent {
  userId: number = 1;
  limit: number = 5;

  products: any[] = [];



  constructor(private productsService: ProductsService ) {
   {}
  }

  fetchProducts() {
    this.productsService.getProducts (this.userId, this.limit  ).subscribe((data: any[]) => {
      this.products = data;
     
    });
  }
 


}
