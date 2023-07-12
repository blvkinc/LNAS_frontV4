import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductionByStatusChartComponent} from './production-by-status-chart.component';

describe('ProductionByStatusChartComponent', () => {
  let component: ProductionByStatusChartComponent;
  let fixture: ComponentFixture<ProductionByStatusChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductionByStatusChartComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductionByStatusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
