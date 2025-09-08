import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ListboxModule,
    InputTextModule,
    TableModule,
    ProgressSpinnerModule
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  searchText: string = '';
  sortOption: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 4;
  products: any[] = [];
  isLoading: boolean = true;

  // 🔹 Sorting options for Listbox
  sortOptions = [
    { label: 'Price: Low to High', value: 'priceAsc' },
    { label: 'Price: High to Low', value: 'priceDesc' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.isLoading = true;
    this.http.get<any[]>('https://fakestoreapi.com/products').subscribe({
      next: (data) => {
        this.products = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('API error:', err);
        this.isLoading = false;
      }
    });
  }

  // 🔹 Filtering + Sorting + Pagination
  get filteredProducts(): any[] {
    let filtered = [...this.products];

    // Search
    if (this.searchText.trim()) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    // Sorting
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
