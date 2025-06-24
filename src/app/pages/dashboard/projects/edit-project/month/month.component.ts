import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-month',
  standalone: true,
  imports: [CommonModule,], 
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.less'] 
})
export class MonthComponent { 
  isDropdownOpen = true;

  dropdownItems = [
    { id: 1, name: 'sep' },
    { id: 2, name: 'may' },
    { id: 3, name: 'dec' },
    { id: 4, name: 'jan' }
  ];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectItem(item: any) {
    console.log('Selected:', item);
  }
}