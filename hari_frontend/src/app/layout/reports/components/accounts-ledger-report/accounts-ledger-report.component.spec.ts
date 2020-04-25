import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLedgerReportComponent } from './accounts-ledger-report.component';

describe('AccountsLedgerReportComponent', () => {
  let component: AccountsLedgerReportComponent;
  let fixture: ComponentFixture<AccountsLedgerReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsLedgerReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsLedgerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
