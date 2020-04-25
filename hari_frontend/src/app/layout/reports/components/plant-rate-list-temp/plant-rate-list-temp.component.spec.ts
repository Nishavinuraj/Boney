import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantRateListTempComponent } from './plant-rate-list-temp.component';

describe('PlantRateListTempComponent', () => {
  let component: PlantRateListTempComponent;
  let fixture: ComponentFixture<PlantRateListTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantRateListTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantRateListTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
