

import { Component, inject, computed, effect, signal } from '@angular/core';
import { UserService } from '../../../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
})
export class UserListComponent {

   newvarible = signal("10")
   signal= signal<string>("20")  
   

  userService = inject(UserService);

  filteredCount = computed(() => this.userService.filteredUsers().length++ );

  logEffect = effect(() => {
    console.log('Filtered Users:', this.userService.filteredUsers());
  }); 
}
