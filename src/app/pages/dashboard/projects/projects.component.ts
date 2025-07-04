import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  searchText: string = '';
  sortOption: string = '';
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

  get filteredProducts(): any[] {
    let filtered = [...this.products];

    // Filter by title
    if (this.searchText.trim()) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    // Sort
    if (this.sortOption === 'priceAsc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'priceDesc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    // Pagination
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    const filteredCount = this.products.filter(p =>
      p.title.toLowerCase().includes(this.searchText.toLowerCase())
    ).length;
    return Math.ceil(filteredCount / this.itemsPerPage);
  }

  changePage(step: number) {
    const next = this.currentPage + step;
    if (next >= 1 && next <= this.totalPages) {
      this.currentPage = next;
    }
  }
}
