import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less'],
})
export class ChildComponent {
  @Input() userList: User[] = [];

  @Output() deleteEvent = new EventEmitter<number>();
  @Output() messageEvent = new EventEmitter<string>();
  @Output() updateEvent = new EventEmitter<string>();
  @Output() addEvent = new EventEmitter<User>();   

  
  newUser: User = { name: '', email: '', age: 0 };

  
  addUser() {
    if (this.newUser.name && this.newUser.email && this.newUser.age > 0) {
      this.addEvent.emit({ ...this.newUser }); 
      this.messageEvent.emit("New user added!");
      this.newUser = { name: '', email: '', age: 0 }; 
    } else {
      this.messageEvent.emit("Please fill all fields");
    }
  }

  deleteUser(index: number) {
    this.deleteEvent.emit(index);
    this.messageEvent.emit("Child component working");
    this.updateEvent.emit("Update successful");
  }
  
}







































































































































































































// import { Component } from '@angular/core';
// import { SharedService } from '../services/shared.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Location } from '@angular/common';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-child',
//   standalone: true,
//   imports:[CommonModule, FormsModule, RouterLink],
//   template: `
//     <h2>Child Component</h2>
//     <div *ngIf="user">
//       <p><strong>Name:</strong> {{ user.name }}</p>
//       <p><strong>Email:</strong> {{ user.email }}</p>
//       <p><strong>Age:</strong> {{ user.age }}</p>
//     </div>

//     <button (click)="addUser()">Add User</button>
//     <button (click)="deleteUser()">Delete User</button>
//     <button (click)="goBack()">Go Back</button>
//   `,
//   styleUrls: ['./child.component.less']
// })
// export class ChildComponent {
//   user: any;

//   constructor(private shared: SharedService, private location: Location) {
//     this.shared.currentData.subscribe((data: any) => {
//       this.user = data;
//     });
//   }

//   deleteUser() {
//     const confirmDelete = window.confirm("Are you sure you want to delete this user?");
//     if (confirmDelete) {
//       this.shared.sendAction({
//         type: "delete",
//         payload: this.user
//       });
//       this.location.back();
//     }
//   }

//   addUser() {
//     const confirmAdd = window.confirm("Do you want to add a new person?");
//     if (confirmAdd) {
//       const newUser = {
//         id: Date.now(),
//         name: "amaze coders ",
//         email: "amazecoders@example.com",
//         age: 25
//       };

//       this.shared.sendAction({
//         type: "add",
//         payload: newUser
//       });
//       this.location.back();
//     }
//   }

//   goBack() {
//     this.location.back();
//   }
// }
