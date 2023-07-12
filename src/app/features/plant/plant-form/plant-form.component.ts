import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {PlantDto} from '../../../api/models/plant-dto';
import {PlantResourceService} from '../../../api/services/plant-resource.service';
import { SecurityModule } from 'src/app/security/security.module';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-plant-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,SecurityModule],
  templateUrl: './plant-form.component.html',
})
export class PlantFormComponent implements OnInit {

  @Input() type: 'CREATE' | 'UPDATE' | 'SEARCH' = 'SEARCH';
  @Input() inputValue: PlantDto;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCreate: EventEmitter<PlantDto> = new EventEmitter<PlantDto>();

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: PlantResourceService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: [this.inputValue?.name ?? null, [Validators.required]],
      status: [this.inputValue?.status ?? null, [Validators.required]],
      description: [this.inputValue?.description ?? null, []],
      purchasePrice: [this.inputValue?.purchasePrice ?? null, [Validators.required]],
      qtyAtHand: [this.inputValue?.qtyAtHand ?? null, [Validators.required]],
      qtyPotential: [this.inputValue?.qtyPotential ?? null, [Validators.required]],
      salesPrice: [this.inputValue?.salesPrice ?? null, [Validators.required]],
      scientificName: [this.inputValue?.scientificName ?? null, []],
      productId: [this.inputValue?.productId ?? null, [Validators.required]],
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
        this.service.createPlant({body: data}).subscribe({
          next: (res) => {
            console.log(res);
            this.onCreate.emit(this.form.value);
            this.toast.success('Plant Created Successfully');
            this.resetForm();
          },
          error: (err) => {
          this.toast.error('Failed to Create the Plant');
            console.log(err);
          },
        });
      } else {
        this.service.updatePlant({body: data, id: this.inputValue.id}).subscribe({
          next: (res) => {
            console.log(res);
            this.onCreate.emit(this.form.value);
            this.toast.success('Plant Updated Successfully');
            this.resetForm();
          },
          error: (err) => {
            this.toast.error('Plant Update Failed');
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
      filter += `scientificName ~~ '%${data.scientificName}%'`;
    }

    if (data.productId) {
      if (filter.length > 0) {
        filter += ` or `;
      }
      filter += `productId ~~ '%${data.productId}%'`;
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
