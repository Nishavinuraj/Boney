import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCreatedEstimateComponent } from './all-created-estimate.component';

describe('AllCreatedEstimateComponent', () => {
  let component: AllCreatedEstimateComponent;
  let fixture: ComponentFixture<AllCreatedEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCreatedEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCreatedEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
