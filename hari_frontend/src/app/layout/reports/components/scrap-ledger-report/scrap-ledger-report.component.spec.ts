import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapLedgerReportComponent } from './scrap-ledger-report.component';

describe('ScrapLedgerReportComponent', () => {
  let component: ScrapLedgerReportComponent;
  let fixture: ComponentFixture<ScrapLedgerReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrapLedgerReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapLedgerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
