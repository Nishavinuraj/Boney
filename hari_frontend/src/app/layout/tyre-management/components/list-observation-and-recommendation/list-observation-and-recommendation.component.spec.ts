import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListObservationAndRecommendationComponent } from './list-observation-and-recommendation.component';

describe('ListObservationAndRecommendationComponent', () => {
  let component: ListObservationAndRecommendationComponent;
  let fixture: ComponentFixture<ListObservationAndRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListObservationAndRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListObservationAndRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
