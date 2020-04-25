import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMonitoringV2Component } from './vehicle-monitoring-v2.component';

describe('VehicleMonitoringV2Component', () => {
  let component: VehicleMonitoringV2Component;
  let fixture: ComponentFixture<VehicleMonitoringV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleMonitoringV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMonitoringV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
