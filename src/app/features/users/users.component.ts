import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserTableComponent} from './user-table/user-table.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserDto} from '../../api/models/user-dto';
import {RouterLink} from '@angular/router';
import {SupplierFormComponent} from '../supplier/supplier-form/supplier-form.component';
import {SupplierTableComponent} from '../supplier/supplier-table/supplier-table.component';
import { SecurityModule } from 'src/app/security/security.module';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink, SupplierFormComponent, SupplierTableComponent, UserFormComponent, UserTableComponent,SecurityModule],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  @ViewChild(UserTableComponent) table: UserTableComponent;
  @ViewChild(UserFormComponent) form: UserFormComponent;

  onSearch($event: string) {
    console.log($event);
    this.table.filter = $event;
    this.table.fetchData();
  }

  onRefresh() {
    this.table.fetchData();
  }

  onEdit($event: UserDto) {
    this.form.inputValue = $event;
    this.form.type = 'UPDATE';
    this.form.initForm();
    window.scroll(0, 0);
  }
}
