import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitEstimateComponent } from './submit-estimate.component';

describe('CreateEstimateComponent', () => {
  let component: SubmitEstimateComponent;
  let fixture: ComponentFixture<SubmitEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
