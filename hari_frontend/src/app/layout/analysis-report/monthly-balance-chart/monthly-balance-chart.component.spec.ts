import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyBalanceChartComponent } from './monthly-balance-chart.component';

describe('MonthlyBalanceChartComponent', () => {
  let component: MonthlyBalanceChartComponent;
  let fixture: ComponentFixture<MonthlyBalanceChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyBalanceChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyBalanceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
