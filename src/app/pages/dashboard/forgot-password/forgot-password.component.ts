import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="forgot-container">
      <h2>Forgot Password</h2>
      <p>Enter your email to receive a reset link.</p>

      <form (ngSubmit)="submitForgot()" #forgotForm="ngForm">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" [(ngModel)]="email" required />
        </div>

        <button type="submit" [disabled]="!forgotForm.valid">Send Reset Link</button>
      </form>

      <a routerLink="/login">Back to Login</a>
    </div>
  `,
  styles: [`
    .forgot-container {
      padding: 20px;
      max-width: 400px;
      margin: auto;
    }
  `]
})
export class ForgotPasswordComponent {
  email: string = '';

  submitForgot() {
    alert(`Reset link sent to: ${this.email}`);
  }
}
