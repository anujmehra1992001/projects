import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule,],
  template: `
    <div class="p-4">
      <input
        [formControl]="searchControl"
        placeholder="Search users"
        class="p-2 border rounded w-full"
      />
    </div>
  `
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300), 
      distinctUntilChanged(),
      switchMap((searchTerm) =>
        this.http.get(`https://jsonplaceholder.typicode.com/users?name_like=${searchTerm}`)
      )
    ).subscribe((response) => {
      console.log('API response:', response);

    });
  }
}

