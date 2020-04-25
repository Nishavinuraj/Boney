import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTruckInspectionComponent } from './add-truck-inspection.component';

describe('AddTruckInspectionComponent', () => {
  let component: AddTruckInspectionComponent;
  let fixture: ComponentFixture<AddTruckInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTruckInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTruckInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
