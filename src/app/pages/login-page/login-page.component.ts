import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthResourceService} from '../../api/services/auth-resource.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AuthResourceService,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('auth')) {
      this.router.navigate(['/home']);
    }
    this.form = this.fb.group({
      username: [null, [Validators.required], []],
      password: [null, [Validators.required], []],
    });
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

  onSubmit() {
    console.log('submit');
    this.validateForm();
    if (!this.form.invalid) {
      const data = this.form.value;
      this.service.login({body: data}).subscribe({
        next: (res) => {
          localStorage.setItem('auth', JSON.stringify(res));
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.toastr.error('Login Error');
          console.log(err);
        },
      });
    } else {
      console.log('invalid');
    }
  }

}
