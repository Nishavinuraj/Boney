import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVehicleMasterComponent } from './edit-vehicle-master.component';

describe('EditVehicleMasterComponent', () => {
  let component: EditVehicleMasterComponent;
  let fixture: ComponentFixture<EditVehicleMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVehicleMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVehicleMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
