import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.less',
})
export class TodoComponent implements OnInit {
  todos: any[] = [];
  skip: number = 0;
  limit: number = 5;
  total: number = 0;
  

  editId: number | null = null;
  editedTodo: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    const url = `https://dummyjson.com/todos?limit=${this.limit}&skip=${this.skip}`;
    this.http.get<any>(url).subscribe((response) => {
      this.todos = response.todos;
      this.total = response.total;
    });
  }

  nextPage(): void {
    if (this.skip + this.limit < this.total) {
      this.skip += this.limit;
      this.fetchTodos();
    }
  }

  prevPage(): void {
    if (this.skip >= this.limit) {
      this.skip -= this.limit;
      this.fetchTodos();
    }
  }

  onCancel(): void {
    this.editId = null;
    this.editedTodo = '';
  }
 
  
  onNext(id: number): void {
    this.router.navigate(['/dashboard/next-view', id]);
  }

 
  startEdit(todo: any): void {
    this.editId = todo.id;
    this.editedTodo = todo.todo;
  }

  
  saveEdit(todo: any): void {
    const updated = {
      todo: this.editedTodo,
      completed: todo.completed,
      userId: todo.userId,
    };

    this.http.put(`https://dummyjson.com/todos/${todo.id}`, updated)
      .subscribe(() => {
        todo.todo = this.editedTodo;
        this.editId = null;
        this.editedTodo = '';
      });
  }

  // Delete Todo
  deleteTodo(id: number): void {
    this.http.delete(`https://dummyjson.com/todos/${id}`)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }
}
