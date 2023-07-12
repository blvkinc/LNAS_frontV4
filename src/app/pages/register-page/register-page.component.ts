import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserDto} from '../../api/models/user-dto';
import {ToastrService} from 'ngx-toastr';
import {AuthResourceService} from '../../api/services/auth-resource.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
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
      firstName: ['null', [Validators.required], []],
      lastName: ['null', [Validators.required], []],
      email: ['null@null.com', [Validators.required], []],
      address: ['null', [], []],
      password: ['null', [Validators.required], []],
      confirmPassword: ['null', [Validators.required], []],
      phone: ['null', [], []],
      role: [null, [Validators.required], []],
    });
  }

  validatePassword() {
    if (this.form.value.password != this.form.value.confirmPassword) {
      this.form.controls.confirmPassword.setErrors({
        passwordMismatch: true,
      });
    } else {
      this.form.controls.confirmPassword.setErrors(null);
    }
  }

  onSubmit() {
    this.validateForm();
    this.validatePassword();
    if (!this.form.invalid) {
      const data = this.form.value;
      this.service.signUp({body: data}).subscribe({
        next: (res) => {
          this.onFormSubmit.emit(res);
          this.resetForm();
          this.message.success('Registration Successful');
        },

        error: (err) => {
          console.log(err);
          this.message.error('Registration Failed, Please Try Again');
          this.resetForm();
        },
      });
    }
  }
}
