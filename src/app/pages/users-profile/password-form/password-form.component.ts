import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDto} from '../../../api/models/user-dto';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthResourceService} from '../../../api/services/auth-resource.service';
import {ToastrService} from 'ngx-toastr';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './password-form.component.html',
})
export class PasswordFormComponent {
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
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  validatePassword() {
    if (this.form.value.newPassword !== this.form.value.confirmPassword) {
      this.message.error('Passwords do not match');
      return false;
    } else {
      return true;
    }
  }

  onSubmit() {
    this.validateForm();
    if (!this.form.invalid && this.validatePassword()) {
      const data = this.form.value;
      this.service.updatePassword({body: data}).subscribe({
        next: (res) => {
          this.resetForm();
          this.message.success('Password updated successfully');
        },
        error: (err) => {
          this.message.error(err);
          this.resetForm();
        },
      });
    }
  }
}
