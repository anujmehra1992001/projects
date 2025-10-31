import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, tap, startWith, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  loading = signal(false);
  error = signal<string | null>(null);
  location: any;

  constructor(private http: HttpClient) {}

  private users$ = this.http.get<any[]>(this.apiUrl).pipe(
    tap(() => {
      console.log(' API call started...');
      this.loading.set(true);
      this.error.set(null);
      this.location.goback();
    }),
    map((users) => {
      console.log(' API data received:', users);
      return users.slice(0, 5);
    }),
    tap(() => {
      console.log(' Loading complete');
      this.loading.set(false);
    }),
    catchError((err) => {
      console.error(' API error:', err);
      this.error.set('Failed to load users');
      this.loading.set(false);
      return of([]);
    }),
    startWith([])
  );

  users = toSignal(this.users$, { initialValue: [] });

  searchQuery = signal('');

  filteredUsers = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.users().filter((u) => u.name.toLowerCase().includes(query));
  });
}
