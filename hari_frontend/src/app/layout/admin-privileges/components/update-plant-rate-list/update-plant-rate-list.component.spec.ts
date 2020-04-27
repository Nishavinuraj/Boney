import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlantRateListComponent } from './update-plant-rate-list.component';

describe('UpdatePlantRateListComponent', () => {
  let component: UpdatePlantRateListComponent;
  let fixture: ComponentFixture<UpdatePlantRateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePlantRateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlantRateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
