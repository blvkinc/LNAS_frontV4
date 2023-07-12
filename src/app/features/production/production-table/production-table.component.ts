import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductionDto} from '../../../api/models/production-dto';
import {ProductionResourceService} from '../../../api/services/production-resource.service';
import { SecurityModule } from 'src/app/security/security.module';
@Component({
  selector: 'app-production-table',
  standalone: true,
  imports: [CommonModule,SecurityModule],
  templateUrl: './production-table.component.html',
})
export class ProductionTableComponent implements OnInit {

  @Output() onEdit: EventEmitter<ProductionDto> = new EventEmitter<ProductionDto>();

  productions: ProductionDto[] = [];
  currentPage = 1;
  pageSize = 5;
  totalElements = 0;
  sortBy = ['id,asc'];
  filter = '';

  pageNumbers: number[] = [];
  totalPages: number;

  constructor(
    private service: ProductionResourceService,
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchData();
  }

  onEditClick(plant: ProductionDto) {
    this.onEdit.emit(plant);
  }

  fetchData(): void {
    let params = {
      page: this.currentPage - 1,
      size: this.pageSize,
      sort: this.sortBy,
    };
    if (this.filter.length > 0) {
      params['filter'] = this.filter;

    }
    this.service.paginateProductions(params).subscribe({
      next: (data) => {
        this.productions = data.content;
        this.totalElements = data.totalElements;
        this.totalPages = data.totalPages;
        this.pageNumbers = new Array(data.totalPages).fill(0).map((x, i) => i + 1);
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

  toggleSortOrder(): void {
    this.sortBy = this.sortBy[0] === 'id,asc' ? ['id,desc'] : ['id,asc'];
    this.fetchData();
  }
}

