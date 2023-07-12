import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderDto} from '../../../api/models/order-dto';
import {OrderResourceService} from '../../../api/services/order-resource.service';

@Component({
  selector: 'app-sales-order-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-order-table.component.html',
})
export class SalesOrderTableComponent implements OnInit {

  @Output() onEdit: EventEmitter<OrderDto> = new EventEmitter<OrderDto>();

  salesOrders: OrderDto[] = [];
  currentPage = 1;
  pageSize = 5;
  totalElements = 0;
  sortBy = ['id,desc'];
  filter = '';

  pageNumbers: number[] = [];
  totalPages: number;

  constructor(
    private service: OrderResourceService,
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchData();
  }

  onEditClick(plant: OrderDto) {
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
    this.service.paginateOrders(params).subscribe({
      next: (data) => {
        this.salesOrders = data.content;
        this.totalElements = data.totalElements;
        this.totalPages = data.totalPages;
        this.pageNumbers = new Array(data.totalPages).fill(0).map((x, i) => i + 1);
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

  onViewClick(salesOrder: OrderDto) {
  }

  toggleSortOrder(): void {
    this.sortBy = this.sortBy[0] === 'id,asc' ? ['id,desc'] : ['id,asc'];
    this.fetchData();
  }
}

