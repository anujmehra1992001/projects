
// import { Component } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
// import { ChildComponent } from '../child/child.component';
// import { CommonModule, NgIf } from '@angular/common';

// interface User {
//   name: string;
//   email: string;
//   age: number;
// }

// @Component({
//   selector: 'app-parent',
//   standalone: true,
//   imports: [FormsModule, CommonModule, ChildComponent],
//   templateUrl: './parent.component.html',
//   styleUrl: './parent.component.less',
  
// })
// export class ParentComponent {
//   users: User[] = [];   
//   childMessage = '';


//   addUser(formValue: any) {
//     const newUser: User = {
//       name: formValue.name,
//       email: formValue.email,
//       age: formValue.age
//     };
//     this.users.push(newUser);
//   }

//changeMessage() {                       
  //   this.parentMessage = "Parent Message Updated!";
  // }


//   receiveMessage(msg: string) {
//     this.childMessage = msg;
//   }


//   deleteUser(index: number) {
//     this.users.splice(index, 1);

//   }

// }
































import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,],
  styleUrl:'./parent.component.less',
  template: `
   
    <form (ngSubmit)="registerUser()">
      <input [(ngModel)]="user.name" name="name" placeholder="Enter Name" />
      <input [(ngModel)]="user.email" name="email" placeholder="Enter Email" />
      <input [(ngModel)]="user.age" name="age" type="number" placeholder="Enter Age" />
      <button type="submit">Register</button>
    </form>

    <div *ngIf="childActionMessage" class="mt-3 p-2 bg-yellow-200">
       Message from Child: {{ childActionMessage }}
    </div>
  `
})
export class ParentComponent {
  user = { name: '', email: '', age: '' };
  childActionMessage = '';
constructor(private shared: SharedService, private router: Router) {
   
    this.shared.childAction$.subscribe((msg: string) => {
      this.childActionMessage = msg;  
    });
  }

  registerUser() {
    this.shared.setData(this.user); 
    this.router.navigate(['/child']); 

  }
}





