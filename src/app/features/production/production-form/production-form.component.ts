import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductionDto} from '../../../api/models/production-dto';
import {ProductionResourceService} from '../../../api/services/production-resource.service';
import {FarmDto} from '../../../api/models/farm-dto';
import {PlantDto} from '../../../api/models/plant-dto';
import {PlantResourceService} from '../../../api/services/plant-resource.service';
import {FarmResourceService} from '../../../api/services/farm-resource.service';
import { SecurityModule } from 'src/app/security/security.module';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-production-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,SecurityModule],
  templateUrl: './production-form.component.html',
})
export class ProductionFormComponent implements OnInit {

  @Input() type: 'CREATE' | 'UPDATE' | 'SEARCH' = 'SEARCH';
  @Input() inputValue: ProductionDto;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCreate: EventEmitter<ProductionDto> = new EventEmitter<ProductionDto>();

  form: FormGroup;
  farmsList: FarmDto[];
  plantsList: PlantDto[];

  constructor(
    private formBuilder: FormBuilder,
    private service: ProductionResourceService,
    private farmService: FarmResourceService,
    private plantService: PlantResourceService,
    private toast: ToastrService

  ) { }

  ngOnInit() {
    this.fetchData();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [this.inputValue?.id ?? null, this.inputValue ? [Validators.required] : [], []],
      name: [this.inputValue?.name ?? null, [Validators.required, Validators.maxLength(255)]],
      description: [this.inputValue?.description ?? null, [Validators.maxLength(255)]],
      productId: [this.inputValue?.productId ?? null, [Validators.required]],
      qty: [this.inputValue?.qty ?? null, [Validators.required]],
      status: [this.inputValue?.status ?? null, [Validators.required]],
      plant: [this.inputValue?.plant ?? null, [Validators.required]],
      farm: [this.inputValue?.farm ?? null, [Validators.required]],
    });
  }

  fetchData() {
    this.farmService.paginateFarms().subscribe({
      next: (res) => {
        this.farmsList = res.content;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.plantService.paginatePlants().subscribe({
      next: (res) => {
        this.plantsList = res.content;
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
      const data = this.form.value;

      if (!this.inputValue) {
        this.service.createProduction({body: data}).subscribe({
          next: (res) => {
            console.log(res);
            this.onCreate.emit(this.form.value);
            this.toast.success('Product Created Successfully');
            this.resetForm();
          },
          error: (err) => {
              this.toast.error('Failed to Create the Product');
            console.log(err);
          },
        });
      } else {
        this.service.updateProduction({body: data, id: this.inputValue.id}).subscribe({
          next: (res) => {
            console.log(res);
            this.onCreate.emit(this.form.value);
             this.toast.success('Product Updated Successfully');
            this.resetForm();
          },
          error: (err) => {
            console.log(err);
            this.toast.error('Product Update Failed');
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

    if (data.qty) {
      filter += `qty ~~ '%${data.qty}%'`;
    }

    if (data.location) {
      if (filter.length > 0) {
        filter += ` or `;
      }
      filter += `plant ~~ '%${data.plant}%'`;
    }

    if (data.productId) {
      if (filter.length > 0) {
        filter += ` or `;
      }
      filter += `productId ~~ '%${data.productId}%'`;
    }

    if (data.farm) {
      if (filter.length > 0) {
        filter += ` or `;
      }
      filter += `farm ~~ '%${data.farm}%'`;
    }

    if (data.status) {
      if (filter.length > 0) {
        filter += ` and `;
      }
      filter += `status : '${data.status}'`;
    }

    if (data.description) {
      filter += `description ~~ '%${data.description}%'`;
    }

    console.log(filter);
    this.onSearch.emit(filter);
  }

}
