import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PurchaseDto} from '../../../api/models/purchase-dto';
import {PurchaseResourceService} from '../../../api/services/purchase-resource.service';

@Component({
  selector: 'app-purchase-order-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchase-order-table.component.html',
})
export class PurchaseOrderTableComponent implements OnInit {

  @Output() onEdit: EventEmitter<PurchaseDto> = new EventEmitter<PurchaseDto>();

  purchaseOrders: PurchaseDto[] = [];
  currentPage = 1;
  pageSize = 5;
  totalElements = 0;
  sortBy = ['id,desc'];
  filter = '';

  pageNumbers: number[] = [];
  totalPages: number;

  constructor(
    private service: PurchaseResourceService,
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchData();
  }

  onEditClick(plant: PurchaseDto) {
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
    this.service.paginatePurchases(params).subscribe({
      next: (data) => {
        this.purchaseOrders = data.content;
        this.totalElements = data.totalElements;
        this.totalPages = data.totalPages;
        this.pageNumbers = new Array(data.totalPages).fill(0).map((x, i) => i + 1);
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

  onViewClick(purchaseOrder: PurchaseDto) {

  }

  toggleSortOrder(): void {
    this.sortBy = this.sortBy[0] === 'id,asc' ? ['id,desc'] : ['id,asc'];
    this.fetchData();
  }
}

