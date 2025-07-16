import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-chart',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgChartsModule], 
  templateUrl: './sales-chart.component.html',
})
export class SalesChartComponent implements OnInit {
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Sales',
        fill: true,
        tension: 0.5,
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.4)',
      }
    ]
  };

  lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchChartData();
  }

  fetchChartData() {
    this.http.get<any[]>('http://localhost:3000/users').subscribe((data) => {
      const labels = data.map(item => item.month);
      const values = data.map(item => item.value);

      this.lineChartData.labels = labels;
      this.lineChartData.datasets[0].data = values;
    });
  }
}
