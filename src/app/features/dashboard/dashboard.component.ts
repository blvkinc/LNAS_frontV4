import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductionChartComponent} from '../charts/production-chart/production-chart.component';
import {SalesChartComponent} from '../charts/sales-chart/sales-chart.component';
import {ProductionByFarmChartComponent} from '../charts/production-by-farm-chart/production-by-farm-chart.component';
import {PurchaseChartComponent} from '../charts/purchase-chart/purchase-chart.component';
import {CardsComponent} from 'src/app/components/cards/cards.component';
import {DashboardResourceService} from 'src/app/api/services';
import {SecurityModule} from '../../security/security.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProductionChartComponent, SalesChartComponent, ProductionByFarmChartComponent, PurchaseChartComponent, CardsComponent, SecurityModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  totalSales: number;
  totalProduction: number;
  totalCount: number;
  totalFarms: number;
  monthlySales: number;
  monthlyProduction: number;
  monthlyInventory: number;
  activeFarms: number;

  constructor(private dashboardService: DashboardResourceService) { }

  ngOnInit(): void {
    this.getTotalSales();
    this.getTotalProduction();
    this.getTotalCount();
    this.getTotalFarms();
    this.getMonthlySales1();
    this.getMonthlyProduction1();
    this.getMonthlyPlantCount();
    this.getActiveFarmsCount();
  }

  getTotalSales(): void {
    this.dashboardService.getTotalSales().subscribe({
      next: (totalSales: number) => {
        this.totalSales = totalSales;
      },
      error: (error) => {
        console.error('Error fetching total sales:', error);
      },
    });
  }

  getTotalProduction(): void {
    this.dashboardService.getTotalProduction().subscribe({
      next: (totalProduction: number) => {
        this.totalProduction = totalProduction;
      },
      error: (error) => {
        console.error('Error fetching total production:', error);
      },
    });
  }

  getTotalCount(): void {
    this.dashboardService.getTotalCount().subscribe({
      next: (totalCount: number) => {
        this.totalCount = totalCount;
      },
      error: (error) => {
        console.error('Error fetching total count:', error);
      },
    });
  }

  getTotalFarms(): void {
    this.dashboardService.getTotalFarms().subscribe({
      next: (totalFarms: number) => {
        this.totalFarms = totalFarms;
      },
      error: (error) => {
        console.error('Error fetching total count:', error);
      },
    });
  }

  getMonthlySales1(): void {
    this.dashboardService.getMonthlySales1().subscribe({
      next: (monthlySales: number) => {
        this.monthlySales = monthlySales;
      },
      error: (error) => {
        console.error('Error fetching total count:', error);
      },
    });
  }

  getMonthlyProduction1(): void {
    this.dashboardService.getMonthlyProduction1().subscribe({
      next: (monthlyProduction: number) => {
        this.monthlyProduction = monthlyProduction;
      },
      error: (error) => {
        console.error('Error fetching total count:', error);
      },
    });
  }

  getMonthlyPlantCount(): void {
    this.dashboardService.getMonthlyPlantCount().subscribe({
      next: (monthlyInventory: number) => {
        this.monthlyInventory = monthlyInventory;
      },
      error: (error) => {
        console.error('Error fetching total count:', error);
      },
    });
  }

  getActiveFarmsCount(): void {
    this.dashboardService.getActiveFarmsCount().subscribe({
      next: (activeFarms: number) => {
        this.activeFarms = activeFarms;
      },
      error: (error) => {
        console.error('Error fetching total count:', error);
      },
    });
  }

}
