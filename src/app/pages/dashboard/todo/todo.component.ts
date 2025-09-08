import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, HttpClientModule, RouterModule, RouterOutlet,TableModule,
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']

})
export class TodoComponent implements OnInit {
  todos: any[] = [
    
  ];
  skip = 0;
  limit = 5;
  total = 1;
  

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
   deleteTodo(id: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.http.delete(`https://dummyjson.com/todos/${id}`)
        .subscribe(() => {
          this.todos = this.todos.filter(todo => todo.id !== id);
          alert('Todo deleted successfully!');
        });}
      
      }
   


goToEdit(id: number) {
this.router.navigate(['/edit', id]); debugger;


}

confirm2(id: number) {
  if (confirm("Are you sure you want to delete?")) {
    this.deleteTodo(id);

  }
}

}












































 
  





























function addtodo() {
  throw new Error('Function not implemented.');
}
//   goToEdit(id: string) {
//   console.log('Navigating with ID:', id);
//   this.router.navigate(['/dashboard/edit', id]);
// }

  
  










