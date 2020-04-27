import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckInspectionComponent } from './truck-inspection.component';

describe('TruckInspectionComponent', () => {
  let component: TruckInspectionComponent;
  let fixture: ComponentFixture<TruckInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
