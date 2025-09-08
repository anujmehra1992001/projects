import { Component, inject } from '@angular/core';
 import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
 import { AuthService } from '../../services/auth/auth.service';

 @Component({
   selector: 'app-dashboard',
   standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less'
 })
export class DashboardComponent {

  private auth= inject(AuthService);
  logout(): void  {
     this.auth.logout();


  }
  

 }


// import { Component, inject } from '@angular/core';
// import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { AuthService } from '../../services/auth/auth.service';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.less'
// })
// export class DashboardComponent {
//   private auth = inject(AuthService);

//   user = {
//     name: 'Anuj Mehra',
//     image: 'assets/images/24.webp'
//   };

//   menuItems = [
//     { label: 'Reports', path: 'reports' },
//      {label: 'search', path: 'search' },
//     { label: 'Modal Content', path: 'modal-content' },
//     { label: 'Projects', path: 'projects' },
//     { label: 'JSON API', path: 'json-api' },
//     { label: 'Sales Chart', path: 'sales-chart' },
//     { label: 'forgot password',path:'forgot password'},
//     {lable:  'todo', path:'todo'},
//     { label: 'Employee', path: 'employee' }

                          
    
    
//   ];

//   logout(): void {
//     this.auth.logout();
//   }

  // cards = [
  // {
  //   title: 'New Orders',
  //   value: 190,
  //   icon: 'fas fa-shopping-bag' // FontAwesome icon
  // },
  // {
  //   title: 'Total Profit',
  //   value: 987,
  //   icon: 'fas fa-users'
  // },
  // {
  //   title: 'Email',
  //   value: 236,
  //   icon: 'fas fa-envelope'
  // }






