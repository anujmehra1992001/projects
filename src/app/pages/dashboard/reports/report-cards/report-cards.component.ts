import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-report-cards',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule ],
  templateUrl: './report-cards.component.html',
  styleUrl: './report-cards.component.less'
})
export class ReportCardsComponent {

}
