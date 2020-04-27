import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderPerformanceTruckReportComponent } from './under-performance-truck-report.component';

describe('UnderPerformanceTruckReportComponent', () => {
  let component: UnderPerformanceTruckReportComponent;
  let fixture: ComponentFixture<UnderPerformanceTruckReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderPerformanceTruckReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderPerformanceTruckReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
