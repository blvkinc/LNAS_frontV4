import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SalaryDto} from '../../../api/models/salary-dto';
import {SalaryResourceService} from '../../../api/services/salary-resource.service';

@Component({
  selector: 'app-salary-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './salary-table.component.html',
})
export class SalaryTableComponent implements OnInit {

  @Output() onEdit: EventEmitter<SalaryDto> = new EventEmitter<SalaryDto>();

  salaries: SalaryDto[] = [];
  currentPage = 1;
  pageSize = 5;
  totalElements = 0;
  sortBy = ['id,desc'];
  filter = '';

  pageNumbers: number[] = [];
  totalPages: number;

  constructor(
    private service: SalaryResourceService,
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchData();
  }

  onEditClick(salary: SalaryDto) {
    this.onEdit.emit(salary);
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
    this.service.paginateSalaries(params).subscribe({
      next: (data) => {
        this.salaries = data.content;
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
