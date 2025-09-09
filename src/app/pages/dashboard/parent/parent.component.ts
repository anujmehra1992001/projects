
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
import { CommonModule, NgIf } from '@angular/common';

interface User {
  name: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule, CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.less',
  
})
export class ParentComponent {
  users: User[] = [];   
  childMessage = '';
  parentMessage: string | undefined;


  addUser(formValue: any) {
    const newUser: User = {
      name: formValue.name,
      email: formValue.email,
      age: formValue.age
    };
    this.users.push(newUser);
  }

changeMessage() {                       
    this.parentMessage = "Parent Message Updated!";
  }


  receiveMessage(msg: string) {
    this.childMessage = msg;
  }


  deleteUser(index: number) {
    this.users.splice(index, 1);

  }

}




































































































































































































































































































// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Router, RouterLink } from '@angular/router';
// import { SharedService } from '../services/shared.service';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-parent',
//   standalone: true,
//   imports: [FormsModule, CommonModule, RouterLink],
//   styleUrls: ['./parent.component.less'],
//   template: `
//     <!-- Register Form -->
//     <form (ngSubmit)="registerUser()" class="mb-3">
//       <input [(ngModel)]="user.name" name="name" placeholder="Enter Name" />
//       <input [(ngModel)]="user.email" name="email" placeholder="Enter Email" />
//       <input [(ngModel)]="user.age" name="age" type="number" placeholder="Enter Age" />
//       <button type="submit">Register</button>
//     </form>

//     <!-- Show list of users -->
//     <h3>User List</h3>
//     <ul>
//       <li *ngFor="let u of users">
//         {{ u.name }} ({{ u.email }}, Age: {{ u.age }})
//       </li>
//     </ul>

//     <!-- Message from Child -->
//     <div *ngIf="childActionMessage" class="mt-3 p-2 bg-yellow-200">
//       Message from Child: {{ childActionMessage }}
//     </div>
//   `
// })
// export class ParentComponent {
//   user = { name: '', email: '', age: 0 };
//   users: any[] = [];
//   childActionMessage = '';

//   constructor(private shared: SharedService, private router: Router) {
//     this.shared.childAction$.subscribe((action: any) => {
//       if (action.type === 'add') {
//         this.users.push(action.payload);
//         this.childActionMessage = `User Added: ${action.payload.name}`;
//       } else if (action.type === 'delete') {
//         this.users = this.users.filter(u => u.id !== action.payload.id);
//         this.childActionMessage = `User Deleted: ${action.payload.name}`;
//       }
//     });
//   }

//   registerUser() {
//     const newUser = {
//       ...this.user,
//       id: Date.now()   // ✅ unique ID assign
//     };

//     this.shared.setData(newUser);   
//     this.router.navigate(['/child']); 

//     this.user = { name: '', email: '', age: 0 }; // reset form
//   }
// }
