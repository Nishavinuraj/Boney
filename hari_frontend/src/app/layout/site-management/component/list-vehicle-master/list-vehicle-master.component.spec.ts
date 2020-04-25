import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVehicleMasterComponent } from './list-vehicle-master.component';

describe('ListVehicleMasterComponent', () => {
  let component: ListVehicleMasterComponent;
  let fixture: ComponentFixture<ListVehicleMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVehicleMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehicleMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
