import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    
  ],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent implements OnInit {
  todoId!: number;
  todoData: any = {
  todo: '',
  completed: false
  };
  loading = false;
  todos: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.todoId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.todoId) {
      this.fetchTodo();
    }
  }

  fetchTodo() {
    this.loading = true;
    this.http.get<any>(`https://dummyjson.com/todos/${this.todoId}`).subscribe({
      next: (res) => {
        this.todoData = res;
        this.loading = false;
      },

      error: (err) => {
        console.error(err);
        alert('Failed to load todo data.');
        this.loading = false;
      }
    });
  }

  updateTodo() {
    if (!this.todoId) {
      alert("Invalid Todo ID!");
      return;
    }

    this.loading = true;
    this.http.put(`https://dummyjson.com/todos/${this.todoId}`, {
      todo: this.todoData.todo,
      completed: this.todoData.completed
    }).subscribe({
      next: (res) => {
        alert('Todo updated successfully!');
        this.router.navigate(['/dashboard/todo']);
      },
      error: (err) => {
        console.error(err);
        alert('Failed to update todo.');
        this.loading = false;
      }
    });
  }

}

























































































