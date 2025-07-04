import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-sales-chart',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgChartsModule,], // ← Add this!
  templateUrl: './sales-chart.component.html',
})

export class SalesChartComponent implements OnInit {
  salesData: any[] = [];
  error: string | null = null;

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Sales',
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.3)',
        fill: true,
      }
    ]
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/sales').subscribe({
      next: (data) => {
        this.salesData = data;
        this.lineChartData.labels = data.map(item => item.month);
        this.lineChartData.datasets[0].data = data.map(item => item.value);
      },
      error: () => {
        this.error = 'Failed to fetch sales data';
      }
    });
  }
}