import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceScrapReportComponent } from './balance-scrap-report.component';

describe('BalanceScrapReportComponent', () => {
  let component: BalanceScrapReportComponent;
  let fixture: ComponentFixture<BalanceScrapReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceScrapReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceScrapReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
