import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private router: Router) {}

  submitForgot() {
    alert(`Reset link sent to: ${this.email}`);
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }
}


