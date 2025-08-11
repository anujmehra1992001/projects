import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template:  `
    <div class="forgot-wrapper">
      <div class="forgot-card">
        <h2>Forgot Password</h2>
        <p class="subtitle">Enter your email to receive a reset link.</p>

        <form (ngSubmit)="submitForgot()" #forgotForm="ngForm">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="email"
              required
              placeholder="Enter your email"
            />
          </div>

          <button type="submit" [disabled]="!forgotForm.valid">Send Reset Link</button>
        </form>

        <a routerLink="/login" class="back-link">← Back to Login</a>
      </div>
    </div>
  `,
styles: [`
  .forgot-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
    background: linear-gradient(to right, #a45e9d, #6c7adf);
  }

  .forgot-card {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }

  h2 {
    margin-bottom: 10px;
    font-size: 24px;
    color: #333;
  }

  .subtitle {
    color: #666;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .form-group {
    text-align: left;
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
    color: #444;
  }

  input[type="email"] {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border-radius: 6px;
    border: 1px solid #ccc;
    transition: border-color 0.3s;
  }

  input[type="email"]:focus {
    border-color: #007bff;
    outline: none;
  }

  button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }

  .back-link {
    display: inline-block;
    margin-top: 20px;
    color: #007bff;
    text-decoration: none;
    font-size: 14px;
  }

  .back-link:hover {
    text-decoration: underline;
  }

  /* ✅ Responsive for small screens */
  @media (max-width: 480px) {
    .forgot-card {
      padding: 20px;
    }

    h2 {
      font-size: 20px;
    }

    .subtitle {
      font-size: 13px;
    }

    button {
      font-size: 15px;
      padding: 10px;
    }
  }
`]
})
export class ForgotPasswordComponent {
  email: string = '';
  router: any;

  submitForgot() {
    alert(`Reset link sent to: ${this.email}`);
  }

  
   backlink(){
    this.router.navigateByUrl
      (['/login']);

   }
  
}
