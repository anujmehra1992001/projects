// import { CommonModule } from '@angular/common';
// import { Component, Input, Output, EventEmitter, input } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// interface User {
//   name: string;
//   email: string;
//   age: number;
// }

// @Component({
//   selector: 'app-child',
//   standalone: true,
//   imports:[FormsModule, CommonModule],
//   templateUrl: './child.component.html',
//   styleUrl:   './child.component.less',
// })
// export class ChildComponent {
//   @Input() userList: User[] = [];   

//   @Output() deleteEvent = new EventEmitter<number>(); 
//   @Output() messageEvent =new EventEmitter<string>();
//   @Output() updateEvent = new EventEmitter<string>(); 
  


//   deleteUser(index: number) {
//     this.deleteEvent.emit(index);
//     this.messageEvent.emit("Child component working");
//     this.updateEvent.emit("Update successful");   
//   }

// }










































import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { CommonModule, FormStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { LoaderService } from '../../../loader.service';



@Component({
  selector: 'app-child',
  standalone: true,
  imports:[CommonModule,FormsModule,RouterLink,RouterLinkActive,RouterModule],
  styleUrl:'./child.component.less',

  template: `
    <h2> User Profile</h2>
    <div *ngIf="user">
      <p><b>Name:</b> {{ user.name }}</p>
      <p><b>Email:</b> {{ user.email }}</p>
      <p><b>Age:</b> {{ user.age }}</p>

      <!-- Action buttons -->
      <button (click)="deleteUser()" class="bg-red-500 text-white px-3 py-1 m-1 rounded">
        Delete User
      </button>
      <button (click)="goBack()" class="bg-blue-500 text-white px-3 py-1 m-1 rounded">
        Back to Parent
      </button>
      
      <button (click)="addUser()"  class="bg-yellow-500 ext-white px-3 py-1 m-1 rounded ">
        Back to update
      </button>
    </div>

   



  `
})


export class ChildComponent {
  user: any;
  loaderService: any;
  loadersService: any;

  constructor(
    private shared: SharedService, 
    private location: Location,
    
   
  ) {
    this.shared.currentData.subscribe((data: any) => {
      this.user = data;
    });
    
  }

deleteUser() {
  const confirmDelete = window.confirm("Are you sure you want to delete this user?");
  if (confirmDelete) {
    this.shared.sendAction("User Deleted"); 
    this.location.back();
  }
}
  
addUser() {
  const confirmAdd = window.confirm("Do you want to add a new person?");
  if (confirmAdd) {
    this.shared.sendAction("add new person");
    this.location.back();
  }
}


goBack() {
  const confirmBack = window.confirm("Are you sure you want to go back?");
  if (confirmBack) {
    this.shared.sendAction("Back from Child");
    this.location.back();
    
  }
  
 
}

}