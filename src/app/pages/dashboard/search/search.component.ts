import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <div class="p-4 max-w-xl mx-auto">
      <input
        [formControl]="searchControl"
        placeholder="🔍 Search users by name..."
        class="p-2 border rounded w-full mb-4"
      />

      <div *ngIf="filteredUsers.length; else noResults">
        <div *ngFor="let user of filteredUsers" class="border p-3 mb-2 rounded bg-gray-100">
          <strong>{{ user.name }}</strong><br />
          <small>Email: {{ user.email }}</small><br />
          <small>City: {{ user.address.city }}</small>
        </div>
      </div>

      <ng-template #noResults>
        <p class="text-gray-500">No users found.</p>
      </ng-template>
    </div>
  `,
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');

  
  allUsers: any[] = [];
  filteredUsers: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(' https://datausa.io/api/data?drilldowns=Nation&measures=Population').subscribe((data) => {
      this.allUsers = data;
      this.filteredUsers = data;
      this.searchControl
      
    });

    this.searchControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((searchTerm) => {
        const term = searchTerm ?? ''; // ✅ fix: convert null to empty string
        this.filteredUsers = this.allUsers.filter((user) =>
          user.name.toLowerCase().includes(term.toLowerCase())
        );
      });
  }
}


  
  

