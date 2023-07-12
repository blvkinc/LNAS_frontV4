import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeTableComponent} from './employee-table/employee-table.component';
import {EmployeeFormComponent} from './employee-form/employee-form.component';
import {EmployeeDto} from '../../api/models/employee-dto';
import {CustomerFormComponent} from '../customer/customer-form/customer-form.component';
import {CustomerTableComponent} from '../customer/customer-table/customer-table.component';
import {RouterLink} from '@angular/router';
import { SecurityModule } from 'src/app/security/security.module';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, CustomerFormComponent, CustomerTableComponent, RouterLink, EmployeeFormComponent, EmployeeTableComponent,SecurityModule],
  templateUrl: './employee.component.html',
})
export class EmployeeComponent {
  @ViewChild(EmployeeTableComponent) table: EmployeeTableComponent;
  @ViewChild(EmployeeFormComponent) form: EmployeeFormComponent;

  onSearch($event: string) {
    console.log($event);
    this.table.filter = $event;
    this.table.fetchData();
  }

  onRefresh() {
    this.table.fetchData();
  }

  onEdit($event: EmployeeDto) {
    this.form.inputValue = $event;
    this.form.type = 'UPDATE';
    this.form.initForm();
    window.scroll(0, 0);
  }
}
