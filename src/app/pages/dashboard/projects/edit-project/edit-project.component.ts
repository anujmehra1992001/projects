import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [ RouterOutlet,RouterLink],
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.less'
})
export class EditProjectComponent {

}
