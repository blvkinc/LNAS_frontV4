import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PurchaseDto} from '../../api/models/purchase-dto';
import {PurchaseOrderFormComponent} from './purchase-order-form/purchase-order-form.component';
import {PurchaseOrderTableComponent} from './purchase-order-table/purchase-order-table.component';
import {CustomerFormComponent} from '../customer/customer-form/customer-form.component';
import {CustomerTableComponent} from '../customer/customer-table/customer-table.component';
import {RouterLink} from '@angular/router';
import { SecurityModule } from 'src/app/security/security.module';
@Component({
  selector: 'app-purchase-orders',
  standalone: true,
  imports: [CommonModule, CustomerFormComponent, CustomerTableComponent, RouterLink, PurchaseOrderFormComponent, PurchaseOrderTableComponent,SecurityModule],
  templateUrl: './purchase-orders.component.html',
})
export class PurchaseOrdersComponent {
  @ViewChild(PurchaseOrderTableComponent) table: PurchaseOrderTableComponent;
  @ViewChild(PurchaseOrderFormComponent) form: PurchaseOrderFormComponent;

  onSearch($event: string) {
    console.log($event);
    this.table.filter = $event;
    this.table.fetchData();
  }

  onRefresh() {
    this.table.fetchData();
  }

  onEdit($event: PurchaseDto) {
    this.form.inputValue = $event;
    this.form.type = 'UPDATE';
    this.form.initForm();
    window.scroll(0, 0);
  }
}
