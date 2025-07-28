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
  roles: any[] = [];
selectedRole = '';

email = '';
password = '';

constructor(private http: HttpClient) {}

ngOnInit() {
  this.http.get<any[]>('http://localhost:3000/api/roles',).subscribe((res) => {
    console.log(' Roles received:', res);
    this.roles = res;
  });
}

login() {
  const payload = { email: this.email, password: this.password };

  this.http.post('http://localhost:3000/api/login', payload).subscribe({
    next: (res: any) => {
      console.log('Login successful:', res);
      
    },
    error: (err) => {
      console.error('Login failed:', err);
    }
  });
}

}
