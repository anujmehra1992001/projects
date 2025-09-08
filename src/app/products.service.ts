// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getProducts(userId: number, limit: number, ): Observable<any> {
    let params = new HttpParams()
      .set('userId', userId)
      .set('_limit', limit);
      

    return this.http.get(this.apiUrl, { params });
  }
}
