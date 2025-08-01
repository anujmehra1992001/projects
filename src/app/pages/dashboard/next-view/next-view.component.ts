// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-next-view',
//    standalone: true,
//   imports: [FormsModule,CommonModule],
//   templateUrl: './next-view.component.html',
//   styleUrls: ['./next-view.component.less'], 
// })
// export class NextViewComponent implements OnInit {
//   id: number | null = null;

//   formData = {
//     name: '',
//     description: ''
//   };
//   todoId: any;

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.id = Number(this.route.snapshot.paramMap.get('id'));
//      console.log("Received ID:", this.id);
//      if(this.id){
//       this.todoId =+this.id;
//       this.fetchtodo();

//      }
//   }
//   fetchtodo() {

//     this.fetchtodo.apply.length.toExponential;
    
//   }

//   submitForm() {
//     console.log('Form submitted:', this.formData);
//   }
// }











































import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-next-view',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule, //
  ],
  templateUrl: './next-view.component.html',
  styleUrl:'./next-view.component.less',
})
export class NextViewComponent implements OnInit {
  todoId!: number;
  todoData: any;
  form!: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.todoId = +id;
        this.fetchTodo();
      }
    });

    this.form = this.fb.group({
      name: [''],
      status: ['false']
    });
  }

  fetchTodo() {
    this.http.get(`https://dummyjson.com/todos/${this.todoId}`).subscribe(
      (res: any) => {
        this.todoData = res;
        this.form.patchValue({
          name: res.todo,
          status: res.completed ? 'true' : 'false'
        });
      }
    );
  }
  
  onSubmit() {
    const updated = {
      todo: this.form.value.name,
      completed: this.form.value.status === 'true',
    };

    this.http.put(`https://dummyjson.com/todos/${this.todoId}`, updated).subscribe(
      (res) => {
        alert('Todo updated successfully!');
        console.log(res);
      },

      (err) => {
        alert('Update failed!');
        console.error(err);
      }
    );
  }
}






















