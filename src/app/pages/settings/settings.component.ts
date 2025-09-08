import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError, map, of } from 'rxjs';

interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

interface ApiResponse {
  status: string;
  data: Employee[];
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];

  searchText: string = '';
  sortOption: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.http.get<ApiResponse>('https://dummy.restapiexample.com/api/v1/employees').pipe(
     
      map(res => res.data),

      
      map((employees: Employee[]) =>
        employees
          .filter(e => e.employee_salary > 200000) 
          .map(e => ({ ...e, employee_name: e.employee_name.toLowerCase() })) 
         
      ),
   
      catchError(err => {
        console.error('API error:', err);
        return of([]); 
      })

    ).subscribe((filteredEmployees: Employee[]) => {
      this.employees = filteredEmployees;
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filteredEmployees = this.employees.filter(emp =>
      emp.employee_name.toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.sortEmployees();
    this.currentPage = 1;
  }

  sortEmployees() {
    switch (this.sortOption) {
      case 'nameAsc':
        this.filteredEmployees.sort((a, b) => a.employee_name.localeCompare(b.employee_name));
        break;
      case 'nameDesc':
        this.filteredEmployees.sort((a, b) => b.employee_name.localeCompare(a.employee_name));
        break;
      case 'salaryAsc':
        this.filteredEmployees.sort((a, b) => a.employee_salary - b.employee_salary);
        break;
      case 'salaryDesc':
        this.filteredEmployees.sort((a, b) => b.employee_salary - a.employee_salary);
        break;
    }
  }

  paginatedEmployees(): Employee[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredEmployees.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }
}
