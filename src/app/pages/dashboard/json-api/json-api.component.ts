import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json-api',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './json-api.component.html',
  styleUrls: ['./json-api.component.less']
})
export class JsonApiComponent implements OnInit {
  users: any[] = [];
  loading = false;
  error: string | null = null;

  toastMessage = '';
  toastVisible = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }
  fetchUsers(): void {
    this.loading = true;
    this.error = null;

    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
        this.showToast('✅ Users loaded successfully!');
      },
      error: (err) => {
        this.error = 'Network issue occurred.';
        this.loading = false;
        this.showToast('❌ Failed to fetch users.');
      }
    });
  }


  showToast(message: string): void {
    this.toastMessage = message;
    this.toastVisible = true;

    setTimeout(() => {
      this.toastVisible = false;
    }, 3000);
  }
}


