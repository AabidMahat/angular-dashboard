import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-by-category.component.html',
  styleUrl: './sales-by-category.component.css',
})
export class SalesByCategoryComponent {
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325,
    },
    title: {
      text: 'Category Wise Sales',
    },
    xAxis: {
      categories: [
        'Electronics',
        'Grocerries',
        'Cosmetics',
        'Clothes',
        'Appliance',
      ],
    },
    yAxis: {
      title: {
        text: 'Revenue in % ',
      },
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'Electronics', y: 35, color: '#044342' }, // Red
          { name: 'Groceries', y: 25, color: '#ed9e20' }, // Green
          { name: 'Cosmetics', y: 15, color: '#6920fb' }, // Blue
          { name: 'Clothes', y: 20, color: '#121212' }, // Pink
          { name: 'Appliance', y: 5, color: '#456e' }, // Yellow
        ],
      },
    ],

    credits: {
      enabled: false,
    },
  });
}
