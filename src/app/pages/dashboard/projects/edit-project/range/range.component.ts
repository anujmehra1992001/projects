import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-range',
  standalone: true,
  imports: [ RouterLink, RouterOutlet],
  templateUrl: './range.component.html',
  styleUrl: './range.component.less'
})
export class RangeComponent {

}
