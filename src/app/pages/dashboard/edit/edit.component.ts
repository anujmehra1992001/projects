import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [    CommonModule,
      ReactiveFormsModule,
      HttpClientModule,CommonModule ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.less'
})
export class EditComponent {


  todoData: any;
    form!: FormGroup;
    todos: any;
   
  
  
    constructor(
      private route: ActivatedRoute,
      private http: HttpClient,
      private fb: FormBuilder
      
    ) {}
  
  
    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
          this.fetchTodo(id);
          
          this.form = this.fb.group({
            id: [id],
            name: [''],
            status: ['false']
  
          });
        }
      });
    }
  
    fetchTodo(id:any) {
      this.http.get(`https://dummyjson.com/todos/${id}`).subscribe(
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
      const formData = this.form.getRawValue()
  
      this.http.put(`https://dummyjson.com/todos/${formData.id}`, formData).subscribe(
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

    


      deleteTodo(id:number){
        const url = `https://dummyjson.com/todos/1${id}`;
        this.http.delete<any>(url).subscribe(
      (res) => {
        console.log('Deleted:', res);})
        if(this.todos){
          this.todoData= true;
        }
  
       
         
      }}
    
  
        
    
  
      
  
    
  
     
  
  
  
  
  
  
  


