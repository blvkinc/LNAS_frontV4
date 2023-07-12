import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserDto} from '../../../api/models/user-dto';
import {UserResourceService} from '../../../api/services/user-resource.service';
import {EmployeeDto} from '../../../api/models/employee-dto';
import {EmployeeResourceService} from '../../../api/services/employee-resource.service';
import {ToastrService} from 'ngx-toastr';
import { AuthResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {

  @Input() type: 'CREATE' | 'UPDATE' | 'SEARCH' = 'SEARCH';
  @Input() inputValue: UserDto;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCreate: EventEmitter<UserDto> = new EventEmitter<UserDto>();

  form: FormGroup;
  employeeList: EmployeeDto[];

  constructor(
    private formBuilder: FormBuilder,
    private service: UserResourceService,
    private employeeService: EmployeeResourceService,
    private authService : AuthResourceService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.fetchData();
    this.initForm();
  }

  fetchData() {
    this.employeeService.paginateEmployees().subscribe({
      next: (res) => {
        this.employeeList = res.content;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [this.inputValue?.id ?? null, this.inputValue ? [Validators.required] : []],
      firstName: [this.inputValue?.firstName ?? null, [Validators.required]],
      lastName: [this.inputValue?.lastName ?? null, [Validators.required]],
      email: [this.inputValue?.email ?? null],
      phone: [this.inputValue?.phone ?? null],
      username: [],
      password: [this.inputValue?.password ?? null, [Validators.required]],
      role: [this.inputValue?.role ?? null, [Validators.required]],
    });
  }

  validateForm() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsTouched();
      this.form.controls[i].updateValueAndValidity();
    }
  }

  resetForm() {
    this.form.reset();
    for (const i in this.form.controls) {
      this.form.controls[i].markAsUntouched();
    }
  }

  onCancel() {
    this.type = 'SEARCH';
    this.form.reset();
  }

  onSearchClear() {
    this.form.reset();
    this.onSearch.emit(null);
  }

  onSubmit() {
    console.log('submit');
    this.validateForm();
    if (!this.form.invalid) {
      const data = this.form.value;
      if (!this.inputValue) {

        this.authService.isEmailAvailable({email: data.email}).subscribe({
          next: (res) => {
            this.service.createUser({body: data}).subscribe({
              next: (res) => {
                console.log(res);
                this.onCreate.emit(this.form.value);
                this.toast.success('User Created Successfully');
                this.resetForm();
              },
              error: (err) => {
                this.toast.error('Failed to Create the User');
                console.log(err);
              },
            });
          },
          error: (err) => {
            console.log(err);
            this.toast.error('Email Already Exist');
          },
        });

      } else {
        this.service.updateUser({body: data, id: this.inputValue.id}).subscribe({
          next: (res) => {
            console.log(res);
            this.onCreate.emit(this.form.value);
            this.toast.success('User Updated Successfully');
            this.resetForm();
          },
          error: (err) => {
            this.toast.error('User Update Failed');
            console.log(err);
          },
        });
      }

    } else {
      console.log('invalid');
    }
  }

  onSearchClick() {
    const data = this.form.value;
    let filter = ``;

    if (data.firstName) {
      filter += `firstName ~~ '%${data.firstName}%'`;
    }

    if (data.lastName) {
      filter += `lastName ~~ '%${data.lastName}%'`;
    }

    if (data.email) {
      filter += `email ~~ '%${data.email}%'`;
    }

    if (data.phone) {
      filter += `phone ~~ '%${data.phone}%'`;
    }

    console.log(filter);
    this.onSearch.emit(filter);
  }

}
