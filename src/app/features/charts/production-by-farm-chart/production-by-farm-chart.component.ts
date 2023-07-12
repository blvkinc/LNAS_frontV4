import {CommonModule} from '@angular/common';
import {Component, OnInit, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';
import {DashboardResourceService} from 'src/app/api/services';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-production-by-farm-chart',
  templateUrl: './production-by-farm-chart.component.html',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
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
export class ProductionByFarmChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {};
  public hasData: boolean = false;

  constructor(private service: DashboardResourceService) {}

  ngOnInit(): void {
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const startDate = this.formatDate(startOfMonth);
    const endDate = this.formatDate(endOfMonth);

    this.service.getMonthlyProductionByFarm({startDate, endDate}).subscribe({
      next: (data: any[]) => {
        const values = [];
        data.forEach((item) => {
          values.push({
            x: item[0],
            y: item[1],
          });
        });
        this.updateChart(values);
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

  updateChart(data) {
    if (data.length === 0) {
      this.hasData = false;
    } else {
      this.hasData = true;

      this.chartOptions = {
        series: [{data: data}],
        chart: {
          type: 'treemap',
          height: 350,
        },
        dataLabels: {
          enabled: true,
        },
        plotOptions: {
          treemap: {
            colorScale: {
              ranges: [
                {
                  from: 0,
                  to: 750,
                  color: '#CD363A',
                },
                {
                  from: 750,
                  to: 5000,
                  color: '#52B12C',
                },
              ],
            },
          },
        },
        title: {
          text: 'Production by Farm',
          align: 'left',
        },
      };
    }
  }
}
