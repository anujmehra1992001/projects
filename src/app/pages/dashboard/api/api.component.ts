import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h1>Profile Editor</h1>

    <!-- 1. Interpolation -->
    <p>Welcome, {{ userName }}!</p>

    <!-- 2. Property Binding -->
    <img [src]="profilePic" [alt]="userName" width="150" height="150">

    <br><br>

    <!-- 3. Two-way Binding -->
    <input [(ngModel)]="userName" placeholder="Enter your name" />

    <br><br>

    <!-- 4. Event Binding -->
    <button (click)="changeProfilePic()">Change Profile Picture</button>
  `
})
export class ApiComponent {  
  userName = 'Anuj';  
  profilePic = 'https://picsum.photos/150?random=1'; 

  changeProfilePic() {
    this.profilePic = `https://picsum.photos/150?random=${Math.floor(Math.random() * 5000)}`;
  }
}
