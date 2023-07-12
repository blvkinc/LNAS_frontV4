import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductionByFarmChartComponent} from './production-by-farm-chart.component';

describe('ProductionByFarmChartComponent', () => {
  let component: ProductionByFarmChartComponent;
  let fixture: ComponentFixture<ProductionByFarmChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductionByFarmChartComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductionByFarmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
