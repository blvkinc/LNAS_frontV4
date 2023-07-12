import {Component, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';
import {ReportResourceService} from '../../../api/services/report-resource.service';
import {ProductionQuantity} from '../../../api/models/production-quantity';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-production-by-status-chart',
  templateUrl: './production-by-status-chart.component.html',
  imports: [
    NgApexchartsModule,
  ],
  standalone: true,
})
export class ProductionByStatusChartComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(
    private service: ReportResourceService,
  ) {}

  ngOnInit(): void {
    this.service.getWeeklyProduction().subscribe({
      next: (data) => {
        this.updateChart(data);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  updateChart(data: ProductionQuantity[]) {
    let quantity = [];
    let categories = [];

    data.forEach(item => {
      quantity.push(item.totalQuantity);
      categories.push(item.period);
    });

    this.chartOptions = {
      series: [
        {
          name: 'Quantity',
          data: quantity,
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Weekly Production',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: categories,
      },
    };
  }
}
