import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTruckInspectionComponent } from './edit-truck-inspection.component';

describe('EditTruckInspectionComponent', () => {
  let component: EditTruckInspectionComponent;
  let fixture: ComponentFixture<EditTruckInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTruckInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTruckInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
