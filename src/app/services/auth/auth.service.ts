import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [
    { id: 1, email: 'text@example.com', password: 'text123', role: 'admin' },
    { id: 2, email: 'manager@example.com', password: 'manager123', role: 'manager' },
    { id: 3, email: 'anujmehra1812@gmail.com', password: 'anuj123', role: 'user' },
  ];

  private currentUser: User | null = null;
  private router = inject(Router);

  constructor() {}

  login(email: string, password: string): boolean {
    const user = this.users.find((u) => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.navigateByUrl('/login');
  }

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const userData = localStorage.getItem('currentUser');
      if (userData) {
        this.currentUser = JSON.parse(userData) as User;
      }
    }
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }

  hasRole(role: 'admin' | 'manager' | 'user'): boolean {
    return this.getCurrentUser()?.role === role;
  }

  navigateByUrl(url: string): void {
    this.router.navigateByUrl(url, { replaceUrl: true });
  }

  checkLoginStatus(): boolean {
    return this.isAuthenticated();
  }
}
