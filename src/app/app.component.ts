import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,FormsModule, CommonModule],

  templateUrl: './app.component.html',
  styleUrl:'./app.component.less',
    
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

}
