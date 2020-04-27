import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceStockReportComponent } from './balance-stock-report.component';

describe('BalanceStockReportComponent', () => {
  let component: BalanceStockReportComponent;
  let fixture: ComponentFixture<BalanceStockReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceStockReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceStockReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
