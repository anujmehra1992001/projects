import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { SalesChartComponent } from './pages/dashboard/sales-chart/sales-chart.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,      
    FormsModule,
    CommonModule,
    LoginComponent,     
    NgChartsModule, 
    SalesChartComponent,
   
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'your-app-title'; // Or whatever is appropriate

}
