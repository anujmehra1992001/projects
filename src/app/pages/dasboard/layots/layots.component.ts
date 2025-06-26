import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layots',
  standalone: true,
  imports: [CommonModule,HttpClient],
  templateUrl: './layots.component.html',
  styleUrl: './layots.component.less'
})
export class LayotsComponent {

}
