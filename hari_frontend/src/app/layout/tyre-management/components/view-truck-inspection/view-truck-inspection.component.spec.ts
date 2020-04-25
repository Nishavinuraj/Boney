import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTruckInspectionComponent } from './view-truck-inspection.component';

describe('ViewTruckInspectionComponent', () => {
  let component: ViewTruckInspectionComponent;
  let fixture: ComponentFixture<ViewTruckInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTruckInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTruckInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
