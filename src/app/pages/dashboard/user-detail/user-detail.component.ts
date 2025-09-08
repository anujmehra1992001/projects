
//   { this.form = this.fb.group({ id: [id], name: [''],
//  status: ['false'] }); this.fetchTodoById(id); }
//   this.form.patchValue({
 //   name: res.todo,
 //   status: res.completed ? 'true' : 'false'
  // });

 // onSubmit() {
   // const formData = this.form.getRawValue()

  // this.http.put(`https://dummyjson.com/todos/${formData.id}`, formData).subscribe(
  //   (res) => {
  //     alert ('Todo updated successfully!');
// constructor(private router: Router) {}

// onEdit(id: number) {
//   this.router.navigate(['/dashboard/todo/edit', id]);
// }







// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-todo-edit',
//   templateUrl: './todo-edit.component.html'
// })
// export class TodoEditComponent implements OnInit {
//   form: FormGroup;
//   todoId: number;

//   constructor(
//     private route: ActivatedRoute,
//     private http: HttpClient,
//     private fb: FormBuilder,
//     private router: Router
//   ) {
//     this.form = this.fb.group({
//       todo: [''],
//       completed: [false],
//     });
//   }

//   ngOnInit(): void {
//     this.todoId = +this.route.snapshot.paramMap.get('id')!;
//     this.http.get(`https://dummyjson.com/todos/${this.todoId}`).subscribe((res: any) => {
//       this.form.patchValue({
//         todo: res.todo,
//         completed: res.completed
//       });
//     });
//   }

//   updateTodo() {
//     this.http.put(`https://dummyjson.com/todos/${this.todoId}`, this.form.value).subscribe(() => {
//       this.router.navigate(['/dashboard/todo']); // Go back to list
//     });
//   }
// }















// parent.component.ts
import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <h2>👨 Parent Component</h2>

    <!-- Input: Parent → Child -->
    <app-child [childMessage]="parentMessage" 
               (messageEvent)="receiveMessage($event)">
    </app-child>

    <p>📩 Message from Child: {{ childMessage }}</p>

    <button (click)="changeMessage()">Change Parent Message</button>
  `
})
export class ParentComponent {
  parentMessage = "Hello from Parent!";
  childMessage = "";

  changeMessage() {
    this.parentMessage = "Parent Message Updated!";
  }

  receiveMessage(msg: string) {
    this.childMessage = msg;
  }
}








// // child.component.ts
// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   standalone: true,
//   template: `
//     <h3>👶 Child Component</h3>
//     <p>Message from Parent: {{ childMessage }}</p>

//     <button (click)="sendMessage()">Send Message to Parent</button>
//   `
// })
// export class ChildComponent {
//   // Parent → Child
//   @Input() childMessage!: string;

//   // Child → Parent
//   @Output() messageEvent = new EventEmitter<string>();

//   sendMessage() {
//     this.messageEvent.emit("Hello Parent, from Child!");
//   }
// }



