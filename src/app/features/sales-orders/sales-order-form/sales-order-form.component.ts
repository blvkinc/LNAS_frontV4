import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {OrderDto} from '../../../api/models/order-dto';
import {OrderResourceService} from '../../../api/services/order-resource.service';
import {PlantResourceService} from '../../../api/services/plant-resource.service';
import {PlantDto} from '../../../api/models/plant-dto';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sales-order-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sales-order-form.component.html',
})
export class SalesOrderFormComponent implements OnInit {

  @Input() type: 'CREATE' | 'UPDATE' | 'SEARCH' = 'SEARCH';
  @Input() inputValue: OrderDto;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCreate: EventEmitter<OrderDto> = new EventEmitter<OrderDto>();

  form: FormGroup;
  plantList: PlantDto[];

  constructor(
    private formBuilder: FormBuilder,
    private service: OrderResourceService,
    private plantService: PlantResourceService,
    private toast: ToastrService
  ) { }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  ngOnInit() {
    this.fetchData();
    this.initForm();
  }

  fetchData() {
    this.plantService.paginatePlants().subscribe({
      next: (res) => {
        this.plantList = res.content;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [this.inputValue?.id ?? null, this.inputValue ? [Validators.required] : []],
      invoiceNo: [this.inputValue?.id ?? null, this.inputValue ? [Validators.required] : []],
      status: [this.inputValue?.status ?? null, [Validators.required]],
      type: [this.inputValue?.type ?? null, [Validators.required]],
      subtotal: [this.inputValue?.subtotal ?? null, [Validators.required]],
      discount: [this.inputValue?.discount ?? null, []],
      tax: [this.inputValue?.tax ?? null, []],
      shipping: [this.inputValue?.shipping ?? null, []],
      total: [this.inputValue?.total ?? null, [Validators.required]],
      items: this.formBuilder.array([]),
    });
  }

  initItemForm(): FormGroup {
    return this.formBuilder.group({
      id: [this.inputValue?.id ?? null, this.inputValue ? [Validators.required] : []],
      invoiceNo: [null,[],[]],
      plant: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      discount: [null, [Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      qty: [null, [Validators.required]],
      description: [null, []],
    });
  }

  addItem(): void {
    const itemsFormArray = this.form.get('items') as FormArray;
    itemsFormArray.push(this.initItemForm());
  }

  removeItem(index: number): void {
    const itemsFormArray = this.form.get('items') as FormArray;
    itemsFormArray.removeAt(index);
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
        this.service.createOrder({body: data}).subscribe({
          next: (res) => {
            console.log(res);
            this.onCreate.emit(this.form.value);
            this.toast.success('Sales Order Created Successfully');
            this.resetForm();
          },
          error: (err) => {
            this.toast.error('Failed to Create the Sale Order');
            console.log(err);
          },
        });
      } else {
        this.service.updateOrder({body: data, id: this.inputValue.id}).subscribe({
          next: (res) => {
            console.log(res);
            this.onCreate.emit(this.form.value);
            this.toast.success('Sale Order Updated Successfully');
            this.resetForm();
          },
          error: (err) => {
            this.toast.error('Sale Order Update Failed');
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

    if (data.invoiceNo) {
      filter += `documentId ~~ '%${data.invoiceNo}%'`;
    }

    if (data.type) {
      filter += `type ~~'%${data.type}%'`;
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
