import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://dummyjson.com/todos';

  constructor(private http: HttpClient) {}

  updateTodo(id: number, completed: boolean) {
    return this.http.put(`${this.apiUrl}/${id}`, { completed });
  }

  deleteTodo(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getPaginatedTodos(limit: number, skip: number) {
  return this.http.get(`https://dummyjson.com/todos?limit=${limit}&skip=${skip}`);
}

// updateTodo(id: number, updatedTodo: any) {
//   return this.http.put(`http://localhost:3000/api/roles/${id}`, updatedTodo);
// }

}

