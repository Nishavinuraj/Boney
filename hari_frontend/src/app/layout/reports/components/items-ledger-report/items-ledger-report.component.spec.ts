import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsLedgerReportComponent } from './items-ledger-report.component';

describe('ItemsLedgerReportComponent', () => {
  let component: ItemsLedgerReportComponent;
  let fixture: ComponentFixture<ItemsLedgerReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsLedgerReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsLedgerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
