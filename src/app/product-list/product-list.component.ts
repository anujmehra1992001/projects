// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, HttpClientModule, RouterModule, RouterOutlet, RouterLinkActive
     
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {
  todos: any[] = [];
  skip = 0;
  limit = 5;
  total = 1;

  showModal = false;
  modalData = { id: 0, todo: '', completed: false, userId: 0 };

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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

  openModal(todo: any): void {
    
    this.modalData = { ...todo };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  updateTodo(): void {
    if (!this.modalData?.id) {
      console.error('Cannot update: No ID found in modalData');
      return;
    }

    console.log('Attempting to update todo:', this.modalData);


    
    this.http.patch(`https://dummyjson.com/todos/${this.modalData.id}`, {
      todo: this.modalData.todo,
      completed: this.modalData.completed
    }).subscribe({
      next: (res: any) => {
        
        console.log('Update successful:', res);


        const index = this.todos.findIndex(t => t.id === this.modalData.id);
        if (index > -1) {
          this.todos[index] = { ...this.todos[index], ...res };
        }

        this.closeModal();
      },
      error: (err) => {
        console.error('Update failed:', err);
      }
    });
  }

  deleteTodo(id: number): void {
    this.http.delete(`https://dummyjson.com/todos/${id}`).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }
}
