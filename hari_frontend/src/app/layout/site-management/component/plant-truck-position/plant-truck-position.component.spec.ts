import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantTruckPositionComponent } from './plant-truck-position.component';

describe('PlantTruckPositionComponent', () => {
  let component: PlantTruckPositionComponent;
  let fixture: ComponentFixture<PlantTruckPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantTruckPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantTruckPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
