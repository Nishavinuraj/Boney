import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTruckInspectionComponent } from './list-truck-inspection.component';

describe('ListTruckInspectionComponent', () => {
  let component: ListTruckInspectionComponent;
  let fixture: ComponentFixture<ListTruckInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTruckInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTruckInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
