import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedEstimatesComponent } from './received-estimates.component';

describe('ReceivedEstimatesComponent', () => {
  let component: ReceivedEstimatesComponent;
  let fixture: ComponentFixture<ReceivedEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
