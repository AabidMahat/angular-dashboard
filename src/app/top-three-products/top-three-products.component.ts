import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.css'],
})
export class TopThreeProductsComponent {
  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225,
    },
    title: {
      text: 'Top 3 Products',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333', // Dark title color
      },
    },
    xAxis: {
      categories: [
        'Lenovo ThinkPad E15',
        'Nectar Orange Juice',
        'Axe Deodorant',
      ],
      labels: {
        style: {
          fontSize: '12px',
          color: '#555',
        },
      },
      gridLineWidth: 0,
      lineColor: 'white',
    },
    yAxis: {
      min: 0,
      gridLineWidth: 0,
    },
    series: [
      {
        showInLegend: false,
        type: 'bar',
        data: [
          { name: 'Lenovo ThinkPad E15', y: 190, color: '#044342' },
          { name: 'Nectar Orange Juice', y: 385, color: '#ed9e20' },
          { name: 'Axe Deodorant', y: 275, color: '#6920fb' },
        ],
        borderRadius: 5, // Rounded corners for bars
        borderWidth: 2,
        borderColor: '#fff', // White border to make the bars pop
        dataLabels: {
          enabled: true,
          format: '{point.y}', // Display the value of each bar
          style: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '14px',
          },
        },
      },
    ],
    tooltip: {
      pointFormat: '<b>{point.name}</b>: {point.y} units',
      backgroundColor: '#333',
      borderColor: '#fff',
      style: {
        color: '#fff',
      },
    },
    plotOptions: {
      bar: {
        groupPadding: 0.1,
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    credits: {
      enabled: false,
    },
  });
}
