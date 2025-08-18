
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
