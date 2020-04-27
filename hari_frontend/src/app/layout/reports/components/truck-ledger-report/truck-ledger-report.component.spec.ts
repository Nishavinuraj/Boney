import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckLedgerReportComponent } from './truck-ledger-report.component';

describe('TruckLedgerReportComponent', () => {
  let component: TruckLedgerReportComponent;
  let fixture: ComponentFixture<TruckLedgerReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckLedgerReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckLedgerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
