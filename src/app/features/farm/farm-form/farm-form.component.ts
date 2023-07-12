import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {FarmDto} from '../../../api/models/farm-dto';
import {FarmResourceService} from '../../../api/services/farm-resource.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-farm-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './farm-form.component.html',
})
export class FarmFormComponent implements OnInit {

  @Input() type: 'CREATE' | 'UPDATE' | 'SEARCH' = 'SEARCH';
  @Input() inputValue: FarmDto;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCreate: EventEmitter<FarmDto> = new EventEmitter<FarmDto>();

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: FarmResourceService,
     private toast: ToastrService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [this.inputValue?.id ?? null, this.inputValue ? [Validators.required] : [], []],
      name: [this.inputValue?.name ?? null, [Validators.required]],
      location: [this.inputValue?.location ?? null, [Validators.required]],
      status: [this.inputValue?.status ?? null, [Validators.required]],
      description: [this.inputValue?.description ?? null, []],
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
        this.service.createFarm({body: data}).subscribe({
          next: (res) => {
            console.log(res);
            this.onCreate.emit(this.form.value);
             this.toast.success('Farm Created Successfully');
            this.resetForm();
          },
          error: (err) => {
                     this.toast.error('Failed to Create the Farm');
            console.log(err);
          },
        });
      } else {
        this.service.updateFarm({body: data, id: this.inputValue.id}).subscribe({
          next: (res) => {
            console.log(res);
            this.onCreate.emit(this.form.value);
            this.toast.success('Farm Updated Successfully');
            this.resetForm();
          },
          error: (err) => {
            this.toast.error('Failed to Update the Farm');
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

    if (data.name) {
      filter += `name ~~ '%${data.name}%'`;
    }

    if (data.location) {
      if (filter.length > 0) {
        filter += ` or `;
      }
      filter += `location ~~ '%${data.location}%'`;
    }

    if (data.description) {
      if (filter.length > 0) {
        filter += ` or `;
      }
      filter += `description ~~ '%${data.description}%'`;
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
