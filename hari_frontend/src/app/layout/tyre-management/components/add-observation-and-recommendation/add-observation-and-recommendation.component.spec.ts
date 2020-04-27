import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObservationAndRecommendationComponent } from './add-observation-and-recommendation.component';

describe('AddObservationAndRecommendationComponent', () => {
  let component: AddObservationAndRecommendationComponent;
  let fixture: ComponentFixture<AddObservationAndRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddObservationAndRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObservationAndRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
