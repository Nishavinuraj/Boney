import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnFleetReportAdminComponent } from './own-fleet-report-admin.component';

describe('OwnFleetReportAdminComponent', () => {
  let component: OwnFleetReportAdminComponent;
  let fixture: ComponentFixture<OwnFleetReportAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnFleetReportAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnFleetReportAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
