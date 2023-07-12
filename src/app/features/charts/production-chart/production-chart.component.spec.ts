import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductionChartComponent} from './production-chart.component';

describe('ProductionChartComponent', () => {
  let component: ProductionChartComponent;
  let fixture: ComponentFixture<ProductionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductionChartComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
