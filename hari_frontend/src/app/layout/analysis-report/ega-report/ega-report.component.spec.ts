import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgaReportComponent } from './ega-report.component';

describe('EgaReportComponent', () => {
  let component: EgaReportComponent;
  let fixture: ComponentFixture<EgaReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgaReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
