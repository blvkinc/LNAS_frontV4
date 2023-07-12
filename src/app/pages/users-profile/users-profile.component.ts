import {Component, OnInit} from '@angular/core';
import {UserDto} from 'src/app/api/models';
import {AuthResourceService} from 'src/app/api/services';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import {PasswordFormComponent} from './password-form/password-form.component';
import {ProfileFormComponent} from './profile-form/profile-form.component';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    PasswordFormComponent,
    ProfileFormComponent,
  ],
})
export class UsersProfileComponent implements OnInit {

  user: UserDto;

  constructor(
    private service: AuthResourceService,
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.service.getCurrentUser().subscribe({
      next: (data: UserDto): void => {
        this.user = data;
      },
      error: (error: any): void => {
        console.error('An error occurred while fetching user data:', error);
      },
    });
  }
}
