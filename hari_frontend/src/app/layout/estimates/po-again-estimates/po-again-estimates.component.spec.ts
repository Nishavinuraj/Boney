import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoAgainEstimatesComponent } from './po-again-estimates.component';

describe('PoAgainEstimatesComponent', () => {
  let component: PoAgainEstimatesComponent;
  let fixture: ComponentFixture<PoAgainEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoAgainEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoAgainEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
