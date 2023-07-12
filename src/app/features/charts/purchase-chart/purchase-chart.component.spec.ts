import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PurchaseChartComponent} from './purchase-chart.component';

describe('PurchaseChartComponent', () => {
  let component: PurchaseChartComponent;
  let fixture: ComponentFixture<PurchaseChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseChartComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PurchaseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
