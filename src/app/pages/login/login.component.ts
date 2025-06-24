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

  private auth = inject(AuthService);
  private router = inject(Router);

  onSubmit(): void {
    const isUser = this.auth.login(this.email, this.password);

    if (isUser) {
      this.errorMessage = '';
      this.router.navigateByUrl('/dashboard');
      // this.router.navigateByUrl('/projects');
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }
}

