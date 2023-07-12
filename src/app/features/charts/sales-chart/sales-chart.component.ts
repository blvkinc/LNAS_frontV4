import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {DashboardResourceService} from 'src/app/api/services';

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
  selector: 'app-sales-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './sales-chart.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    #chart {
      width: 100%;
      height: 100%;
    }
  `],
})
export class SalesChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public hasData: boolean = false;

  constructor(private service: DashboardResourceService) {}

  ngOnInit(): void {
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const startDate = this.formatDate(startOfMonth);
    const endDate = this.formatDate(endOfMonth);

    this.service.getWeeklySales1({startDate, endDate}).subscribe({
      next: (data) => {
        const yValues = [];
        const xValues = [];
        for (const key of Object.keys(data)) {
          yValues.push(key.split('T')[0]);
          xValues.push(data[key]);
        }
        this.updateChart(xValues, yValues);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  updateChart(xValues: number[], yValues: number[]) {
    if (yValues.length === 0) {
      this.hasData = false;
    } else {
      this.hasData = true;

      this.chartOptions = {
        series: [
          {
            name:"Weekly Sales",
            data: xValues,
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
          curve: 'smooth',
          colors: ['#ff0000'],
          width: 2,
        },
        title: {
          text: 'Weekly Sales',
          align: 'left',
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: yValues,
        },
      };
    }
  }
}
