import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsItemsLedgerReportComponent } from './accounts-items-ledger-report.component';

describe('AccountsItemsLedgerReportComponent', () => {
  let component: AccountsItemsLedgerReportComponent;
  let fixture: ComponentFixture<AccountsItemsLedgerReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsItemsLedgerReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsItemsLedgerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
