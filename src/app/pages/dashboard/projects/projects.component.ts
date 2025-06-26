import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

   searchText: string = '';
  sortOption: string = '';
sortoption :any= '';
  currentPage: number = 1;
  itemsPerPage: number = 4;
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://fakestoreapi.com/products').subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('API error:', err)

    });
  }
  
}
