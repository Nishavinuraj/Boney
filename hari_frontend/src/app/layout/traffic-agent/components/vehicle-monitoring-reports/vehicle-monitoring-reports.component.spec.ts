import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMonitoringReportsComponent } from './vehicle-monitoring-reports.component';

describe('VehicleMonitoringReportsComponent', () => {
  let component: VehicleMonitoringReportsComponent;
  let fixture: ComponentFixture<VehicleMonitoringReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleMonitoringReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMonitoringReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
