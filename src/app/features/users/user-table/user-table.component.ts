import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDto} from '../../../api/models/user-dto';
import {UserResourceService} from '../../../api/services/user-resource.service';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrls: ['user-table.component.css'],
})
export class UserTableComponent implements OnInit {

  @Output() onEdit: EventEmitter<UserDto> = new EventEmitter<UserDto>();

  users: UserDto[] = [];
  currentPage = 1;
  pageSize = 5;
  totalElements = 0;
  sortBy = ['id,desc'];
  filter = '';

  pageNumbers: number[] = [];
  totalPages: number;

  constructor(
    private service: UserResourceService,
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchData();
  }

  onEditUser(plant: UserDto) {
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
    this.service.paginateUsers(params).subscribe({
      next: (data) => {
        this.users = data.content;
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

  onApproveUser(user: UserDto) {
    this.service.approveUser({id: user.id}).subscribe({
      next: (data) => {
        this.fetchData();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onDeleteUser(user: UserDto) {
    this.service.deleteUser({id: user.id}).subscribe({
      next: (data) => {
        this.fetchData();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
