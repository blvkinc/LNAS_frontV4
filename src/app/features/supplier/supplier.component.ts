import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SupplierFormComponent} from './supplier-form/supplier-form.component';
import {SupplierTableComponent} from './supplier-table/supplier-table.component';
import {SupplierDto} from '../../api/models/supplier-dto';
import {RouterLink} from '@angular/router';
import { SecurityModule } from 'src/app/security/security.module';
@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [CommonModule, RouterLink, SupplierFormComponent, SupplierTableComponent,SecurityModule],
  templateUrl: './supplier.component.html',
})
export class SupplierComponent {
  @ViewChild(SupplierTableComponent) table: SupplierTableComponent;
  @ViewChild(SupplierFormComponent) form: SupplierFormComponent;

  onSearch($event: string) {
    console.log($event);
    this.table.filter = $event;
    this.table.fetchData();
  }

  onRefresh() {
    this.table.fetchData();
  }

  onEdit($event: SupplierDto) {
    this.form.inputValue = $event;
    this.form.type = 'UPDATE';
    this.form.initForm();
    window.scroll(0, 0);
  }
}
