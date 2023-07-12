import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductionTableComponent} from './production-table/production-table.component';
import {ProductionFormComponent} from './production-form/production-form.component';
import {ProductionDto} from '../../api/models/production-dto';
import {CustomerFormComponent} from '../customer/customer-form/customer-form.component';
import {CustomerTableComponent} from '../customer/customer-table/customer-table.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-production',
  standalone: true,
  imports: [CommonModule, CustomerFormComponent, CustomerTableComponent, RouterLink, ProductionFormComponent, ProductionTableComponent],
  templateUrl: './production.component.html',
})
export class ProductionComponent {
  @ViewChild(ProductionTableComponent) table: ProductionTableComponent;
  @ViewChild(ProductionFormComponent) form: ProductionFormComponent;

  onSearch($event: string) {
    console.log($event);
    this.table.filter = $event;
    this.table.fetchData();
  }

  onRefresh() {
    this.table.fetchData();
  }

  onEdit($event: ProductionDto) {
    this.form.inputValue = $event;
    this.form.type = 'UPDATE';
    this.form.initForm();
    window.scroll(0, 0);
  }
}
