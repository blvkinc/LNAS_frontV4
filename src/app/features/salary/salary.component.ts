import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {SalaryFormComponent} from './salary-form/salary-form.component';
import {SalaryTableComponent} from './salary-table/salary-table.component';
import {SalaryDto} from '../../api/models/salary-dto';
import { SecurityModule } from 'src/app/security/security.module';
@Component({
  selector: 'app-salary',
  standalone: true,
  imports: [CommonModule, SalaryFormComponent, SalaryTableComponent, RouterLink, SalaryFormComponent, SalaryTableComponent,SecurityModule],
  templateUrl: './salary.component.html',
})
export class SalaryComponent {
  @ViewChild(SalaryTableComponent) table: SalaryTableComponent;
  @ViewChild(SalaryFormComponent) form: SalaryFormComponent;

  onSearch($event: string) {
    console.log($event);
    this.table.filter = $event;
    this.table.fetchData();
  }

  onRefresh() {
    this.table.fetchData();
  }

  onEdit($event: SalaryDto) {
    this.form.inputValue = $event;
    this.form.type = 'UPDATE';
    this.form.initForm();
    window.scroll(0, 0);
  }
}
