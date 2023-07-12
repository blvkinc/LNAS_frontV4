import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SalesOrderTableComponent} from './sales-order-table/sales-order-table.component';
import {SalesOrderFormComponent} from './sales-order-form/sales-order-form.component';
import {OrderDto} from '../../api/models/order-dto';
import {PurchaseOrderFormComponent} from '../purchase-orders/purchase-order-form/purchase-order-form.component';
import {PurchaseOrderTableComponent} from '../purchase-orders/purchase-order-table/purchase-order-table.component';
import {RouterLink} from '@angular/router';
import { SecurityModule } from 'src/app/security/security.module';

@Component({
  selector: 'app-sales-orders',
  standalone: true,
  imports: [CommonModule, PurchaseOrderFormComponent, PurchaseOrderTableComponent, RouterLink, SalesOrderFormComponent, SalesOrderTableComponent,SecurityModule],
  templateUrl: './sales-orders.component.html',
})
export class SalesOrdersComponent {
  @ViewChild(SalesOrderTableComponent) table: SalesOrderTableComponent;
  @ViewChild(SalesOrderFormComponent) form: SalesOrderFormComponent;

  onSearch($event: string) {
    console.log($event);
    this.table.filter = $event;
    this.table.fetchData();
  }

  onRefresh() {
    this.table.fetchData();
  }

  onEdit($event: OrderDto) {
    this.form.inputValue = $event;
    this.form.type = 'UPDATE';
    this.form.initForm();
    window.scroll(0, 0);
  }
}
