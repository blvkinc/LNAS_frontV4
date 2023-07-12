import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerDto} from '../../../api/models/customer-dto';
import {CustomerResourceService} from '../../../api/services/customer-resource.service';

@Component({
  selector: 'app-customer-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-table.component.html',
})
export class CustomerTableComponent implements OnInit {

  @Output() onEdit: EventEmitter<CustomerDto> = new EventEmitter<CustomerDto>();

  customers: CustomerDto[] = [];
  currentPage = 1;
  pageSize = 5;
  totalElements = 0;
  sortBy = ['id,asc'];
  filter = '';

  pageNumbers: number[] = [];
  totalPages: number;

  constructor(
    private service: CustomerResourceService,
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchData();
  }

  onEditClick(customer: CustomerDto) {
    this.onEdit.emit(customer);
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
    this.service.paginateCustomers(params).subscribe({
      next: (data) => {
        this.customers = data.content;
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
