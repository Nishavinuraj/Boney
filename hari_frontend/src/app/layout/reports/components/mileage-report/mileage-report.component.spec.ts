import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MileageReportComponent } from './mileage-report.component';

describe('MileageReportComponent', () => {
  let component: MileageReportComponent;
  let fixture: ComponentFixture<MileageReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MileageReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MileageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
