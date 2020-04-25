import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEgaReportComponent } from './site-ega-report.component';

describe('SiteEgaReportComponent', () => {
  let component: SiteEgaReportComponent;
  let fixture: ComponentFixture<SiteEgaReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteEgaReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteEgaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
