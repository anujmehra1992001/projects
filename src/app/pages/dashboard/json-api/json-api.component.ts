import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json-api',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './json-api.component.html'
})
export class JsonApiComponent implements OnInit {
  users: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.loading = true;
    this.http.get<any[]>('http://localhost:3000/users').subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'NetWork issue  ';
        this.loading = false;
      }
    });
  }
}
