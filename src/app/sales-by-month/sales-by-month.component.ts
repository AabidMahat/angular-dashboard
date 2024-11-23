import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  standalone: true,
  imports: [ChartModule],

  templateUrl: './sales-by-month.component.html',
  styleUrl: './sales-by-month.component.css',
})
export class SalesByMonthComponent {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325,
    },
    title: {
      text: 'Month Wise Sales',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Revenue in ₹ ',
      },
    },
    series: [
      {
        name: 'Arizona',
        type: 'line',
        color: '#044342',
        data: [523, 624, 678, 745, 567, 310, 698, 829, 934, 612, 297, 752],
      },
      {
        name: 'California',
        type: 'line',
        color: '#7e0505',

        data: [300, 450, 520, 400, 650, 700, 850, 900, 1050, 980, 750, 620],
      },
      {
        name: 'Nevada',
        type: 'line',
        color: '#ed9e20',

        data: [120, 320, 450, 300, 480, 540, 620, 720, 820, 860, 940, 1020],
      },
    ],

    credits: {
      enabled: false,
    },
  });
}
