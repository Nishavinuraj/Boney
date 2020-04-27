import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObservationAndRecommendationComponent } from './edit-observation-and-recommendation.component';

describe('EditObservationAndRecommendationComponent', () => {
  let component: EditObservationAndRecommendationComponent;
  let fixture: ComponentFixture<EditObservationAndRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditObservationAndRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditObservationAndRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
