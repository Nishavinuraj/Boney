import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsRateMultipleDestinationComponent } from './plants-rate-multiple-destination.component';

describe('PlantsRateMultipleDestinationComponent', () => {
  let component: PlantsRateMultipleDestinationComponent;
  let fixture: ComponentFixture<PlantsRateMultipleDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantsRateMultipleDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsRateMultipleDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
