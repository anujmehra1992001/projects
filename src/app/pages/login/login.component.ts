import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  imports: [FormsModule, CommonModule] 
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  selectedAction: string = ''; // ✅ Add this to fix "selectedAction not defined"

  private auth = inject(AuthService);
  private router = inject(Router);

  onSubmit(): void {
    const isUser = this.auth.login(this.email, this.password);

    if (isUser) {
      this.errorMessage = '';
      this.router.navigateByUrl('/dashboard');
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }

  onForgotClick() {
    this.selectedAction = 'forgot';
    console.log('User clicked Forgot Password');
  }

  onSignUpClick() {
    this.selectedAction = 'signup';
    console.log('User clicked Sign Up');
  }
}

 


