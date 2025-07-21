import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule,],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})

export class SettingsComponent implements OnInit {
  employees: any[] = [];
  filteredEmployees: any[] = [];

  searchText: string = '';
  sortOption: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.http.get<any>('https://dummy.restapiexample.com/api/v1/employees')
      .subscribe((res) => {
        this.employees = res.data;
        this.applyFilters();
      });
  }



  applyFilters() {
    
    this.filteredEmployees = this.employees.filter(emp =>
      emp.employee_name.toLowerCase().includes(this.searchText.toLowerCase())
    );

    
    this.sortEmployees();
    this.nextPage();
    
    
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

  paginatedEmployees(): any[] {
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

function user() {
  throw new Error('Function not implemented.');
}

