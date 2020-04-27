import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLedgerReportComponent } from './order-ledger-report.component';

describe('OrderLedgerReportComponent', () => {
  let component: OrderLedgerReportComponent;
  let fixture: ComponentFixture<OrderLedgerReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLedgerReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLedgerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
