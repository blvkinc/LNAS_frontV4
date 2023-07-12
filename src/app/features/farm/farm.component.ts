import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FarmFormComponent} from './farm-form/farm-form.component';
import {FarmTableComponent} from './farm-table/farm-table.component';
import {RouterLink} from '@angular/router';
import {FarmDto} from '../../api/models/farm-dto';
import {SecurityModule } from 'src/app/security/security.module';

@Component({
  selector: 'app-farm',
  standalone: true,
  imports: [CommonModule, FarmFormComponent, FarmTableComponent, RouterLink,SecurityModule],
  templateUrl: './farm.component.html',
})
export class FarmComponent {

  @ViewChild(FarmTableComponent) table: FarmTableComponent;
  @ViewChild(FarmFormComponent) form: FarmFormComponent;

  onSearch($event: string) {
    console.log($event);
    this.table.filter = $event;
    this.table.fetchData();
  }

  onRefresh() {
    this.table.fetchData();
  }

  onEdit($event: FarmDto) {
    this.form.inputValue = $event;
    this.form.type = 'UPDATE';
    this.form.initForm();
    window.scroll(0, 0);
  }
}
