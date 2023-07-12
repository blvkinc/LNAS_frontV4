import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {CustomerFormComponent} from './customer-form/customer-form.component';
import {CustomerTableComponent} from './customer-table/customer-table.component';
import {CustomerDto} from '../../api/models/customer-dto';
import { SecurityModule } from 'src/app/security/security.module';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, CustomerFormComponent, CustomerTableComponent, RouterLink, CustomerFormComponent,SecurityModule],
  templateUrl: './customer.component.html',
})
export class CustomerComponent {
  @ViewChild(CustomerTableComponent) table: CustomerTableComponent;
  @ViewChild(CustomerFormComponent) form: CustomerFormComponent;

  onSearch($event: string) {
    console.log($event);
    this.table.filter = $event;
    this.table.fetchData();
  }

  onRefresh() {
    this.table.fetchData();
  }

  onEdit($event: CustomerDto) {
    this.form.inputValue = $event;
    this.form.type = 'UPDATE';
    this.form.initForm();
    window.scroll(0, 0);
  }
}
