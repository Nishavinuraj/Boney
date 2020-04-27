import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchSummaryComponent } from './dispatch-summary.component';

describe('DispatchSummaryComponent', () => {
  let component: DispatchSummaryComponent;
  let fixture: ComponentFixture<DispatchSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
