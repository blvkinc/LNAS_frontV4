import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EmployeeDto} from '../../../api/models/employee-dto';
import {EmployeeResourceService} from '../../../api/services/employee-resource.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
})
export class EmployeeFormComponent implements OnInit {

  @Input() type: 'CREATE' | 'UPDATE' | 'SEARCH' = 'SEARCH';
  @Input() inputValue: EmployeeDto;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCreate: EventEmitter<EmployeeDto> = new EventEmitter<EmployeeDto>();

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: EmployeeResourceService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [this.inputValue?.id ?? null, this.inputValue ? [Validators.required] : []],
      firstName: [this.inputValue?.firstName ?? null, [Validators.required]],
      lastName: [this.inputValue?.lastName ?? null, [Validators.required]],
      email: [this.inputValue?.email ?? null],
      phone: [this.inputValue?.phone ?? null],
      address: [this.inputValue?.address ?? null, [Validators.required]],
      status: [this.inputValue?.status ?? null, [Validators.required]],
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
        this.service.createEmployee({body: data}).subscribe({
          next: (res) => {
            console.log(res);
            this.onCreate.emit(this.form.value);
            this.toast.success('Employee Created Successfully');
            this.resetForm();
          },
          error: (err) => {
            this.toast.error('Failed to Create the Employee');
            console.log(err);
          },
        });
      } else {
        this.service.updateEmployee({body: data, id: this.inputValue.id}).subscribe({
          next: (res) => {
            console.log(res);
            this.onCreate.emit(this.form.value);
             this.toast.success('Employee Updated Successfully');
            this.resetForm();
          },
          error: (err) => {
            this.toast.error('Failed to Update the Employee');
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

    if (data.address) {
      filter += `address ~~ '%${data.address}%'`;
    }

    if (data.status) {
      if (filter.length > 0) {
        filter += ` and `;
      }
      filter += `status : '${data.status}'`;
    }
    console.log(filter);
    this.onSearch.emit(filter);
  }

}
