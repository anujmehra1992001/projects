import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-next-view',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './next-view.component.html',
})
export class NextViewComponent implements OnInit {
  todoId!: number;

  
  todoData: {
    todo: string;
    completed: boolean;
  } = {
    todo: '',
    completed: false,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.todoId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchTodo();
  }

  fetchTodo(): void {
    this.http.get(`https://dummyjson.com/todos/${this.todoId}`).subscribe((res: any) => {
      this.todoData = {
        todo: res.todo,
        completed: res.completed,
      };
    });
  }

  updateTodo(): void {
    this.http
      .put(`https://dummyjson.com/todos/${this.todoId}`, {
        todo: this.todoData.todo,
        completed: this.todoData.completed,
      })
      .subscribe((res) => {
        alert('Todo updated!');
        this.router.navigate(['/dashboard/todo']);
      });
  }
 

  // ✅ This was missing earlier
  onCancel(): void {
    this.router.navigate(['/dashboard/todo']);
  }
}






