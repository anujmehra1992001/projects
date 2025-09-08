import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://dummyjson.com/todos';

  
  private todosSubject = new BehaviorSubject<any[]>([]);
  todos$ = this.todosSubject.asObservable();

  constructor(private http: HttpClient) {}

  
  fetchTodos(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      tap((res) => {
        this.todosSubject.next(res.todos);
      })
    );
  }

  
  getTodoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  
  updateTodo(id: number, data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, data).pipe(
      tap((updatedTodo: any) => {
        const currentTodos = this.todosSubject.value;
        const index = currentTodos.findIndex(t => t.id === id);
        if (index > -1) {
          currentTodos[index] = { ...currentTodos[index], ...updatedTodo };
          this.todosSubject.next([...currentTodos]);
        }
      })
    );
  }

  
  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        const currentTodos = this.todosSubject.value.filter(t => t.id !== id);
        this.todosSubject.next(currentTodos);
      })
    );
  }
}
