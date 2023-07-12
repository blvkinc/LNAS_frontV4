import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDto} from '../../../api/models/user-dto';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AuthResourceService} from '../../../api/services/auth-resource.service';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-form.component.html',
})
export class ProfileFormComponent {
  @Input()
  inputValue: UserDto;
  @Output()
  onFormSubmit = new EventEmitter<UserDto>();

  form: FormGroup;
  loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private message: ToastrService,
    private service: AuthResourceService,
  ) {
    this.fetchData();
  }

  fetchData() {
    this.loading = false;
  }

  validateForm() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
  }

  resetForm() {
    this.form.reset();
    for (const i in this.form.controls) {
      this.form.controls[i].markAsUntouched();
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [this.inputValue?.firstName, [Validators.required], []],
      lastName: [this.inputValue?.lastName, [Validators.required], []],
      email: [this.inputValue?.email, [Validators.required], []],
      address: [this.inputValue?.address, [], []],
      phone: [this.inputValue?.phone, [], []],
    });
  }

  onSubmit() {
    this.validateForm();
    if (!this.form.invalid) {
      const data = this.form.value;
      this.service.updateProfile({body: data}).subscribe({
        next: (res) => {
          this.message.success('Profile updated successfully');
          this.onFormSubmit.emit();
        },
      });
    }
  }
}
