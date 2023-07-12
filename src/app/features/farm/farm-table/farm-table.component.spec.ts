import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FarmTableComponent} from './farm-table.component';

describe('FarmTableComponent', () => {
  let component: FarmTableComponent;
  let fixture: ComponentFixture<FarmTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmTableComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(FarmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
