import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.less'],
  imports: [FormsModule, HttpClientModule, RouterModule, RouterOutlet],
})
export class reportsComponent {
  email = '';
  password = '';
  message = '';

  constructor(private http: HttpClient) {}

  login() {
    this.http.post<any>('http://localhost:3000/api/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        this.message = res.message;
        console.log('✅ Login Success:', res);

        // 💾 Save token in localStorage
        localStorage.setItem('token', res.token);
      },
      error: (err) => {
        this.message = err.error.message;
        console.log('❌ Login Failed:', err);
      }
    });
  } }
