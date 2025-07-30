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
  selectedId: number | undefined;
  isEditing: boolean | undefined;
  

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
onNext(id: number): void {
  this.router.navigate(['/dashboard/next', id]); 
  }

  onCancel(): void {
  this.isEditing = false;
  }
}








