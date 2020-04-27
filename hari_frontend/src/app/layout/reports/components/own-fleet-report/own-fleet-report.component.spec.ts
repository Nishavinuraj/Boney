import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnFleetReportComponent } from './own-fleet-report.component';

describe('OwnFleetReportComponent', () => {
  let component: OwnFleetReportComponent;
  let fixture: ComponentFixture<OwnFleetReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnFleetReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnFleetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
