import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SalesOrderTableComponent} from './sales-order-table.component';

describe('SalesOrderTableComponent', () => {
  let component: SalesOrderTableComponent;
  let fixture: ComponentFixture<SalesOrderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesOrderTableComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(SalesOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
