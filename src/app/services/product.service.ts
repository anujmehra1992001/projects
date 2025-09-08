// // product.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

// export interface Product {
//   id: number;
//   name: string;
//   active: boolean;
// }

// @Injectable({ providedIn: 'root' })
// export class ProductService {
//   constructor(private http: HttpClient) {}

//   getActiveProducts() {
//     return this.http.get<Product[]>('http://localhost:3000/products').pipe(
//       map(products =>
//         products
//           .filter(p => p.active) 
//           .map(p => ({ ...p, name: p.name.toUpperCase() })) 
//           .concat() 
//       )
//     );
//   }
// }
