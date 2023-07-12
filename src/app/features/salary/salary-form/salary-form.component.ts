import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {SalaryDto} from '../../../api/models/salary-dto';
import {SalaryResourceService} from '../../../api/services/salary-resource.service';
import {EmployeeResourceService} from '../../../api/services/employee-resource.service';
import {EmployeeDto} from '../../../api/models/employee-dto';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-salary-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './salary-form.component.html',
})
export class SalaryFormComponent implements OnInit {

  @Input() type: 'CREATE' | 'UPDATE' | 'SEARCH' = 'SEARCH';
  @Input() inputValue: SalaryDto;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCreate: EventEmitter<SalaryDto> = new EventEmitter<SalaryDto>();

  form: FormGroup;
  employeeList: EmployeeDto[];

  constructor(
    private formBuilder: FormBuilder,
    private service: SalaryResourceService,
    private employeeService: EmployeeResourceService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.fetchData();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [this.inputValue?.id ?? null, this.inputValue ? [Validators.required] : []],
      amount: [this.inputValue?.amount ?? null, [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      paidOn: [this.inputValue?.paidOn ?? null, [Validators.required]],
      description: [this.inputValue?.description ?? null, [Validators.required, Validators.maxLength(255)]],
      status: [this.inputValue?.status ?? null, [Validators.required]],
      employee: [this.inputValue?.employee ?? null, [Validators.required]],
    });
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
      let data = this.form.value;
      data.paidOn = new Date(data.paidOn);
      this.service.createSalary({body: data}).subscribe({
        next: (res) => {
          console.log(res);
          this.onCreate.emit(this.form.value);
          this.toast.success('Salary Entry Created Successfully');
          this.resetForm();
        },
        error: (err) => {
          this.toast.error('Failed to Create Salary Entry');
          console.log(err);
        },
      });
    } else {
      console.log('invalid');
    }
  }

  onSearchClick() {
    const data = this.form.value;
    let filter = ``;

    if (data.amount) {
      filter += `amount ~~ '%${data.amount}%'`;
    }

    if (data.employee) {
      filter += `employee : '%${data.employee}%'`;
    }

    if (data.description) {
      filter += `amount ~~ '%${data.description}%'`;
    }

    if (data.status) {
      if (filter.length > 0) {
        filter += ` and `;
      }
      filter += `status : '${data.status}'`;
    }

    this.onSearch.emit(filter);
  }
}
