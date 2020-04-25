import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchSummarySiteWiseComponent } from './dispatch-summary-site-wise.component';

describe('DispatchSummarySiteWiseComponent', () => {
  let component: DispatchSummarySiteWiseComponent;
  let fixture: ComponentFixture<DispatchSummarySiteWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchSummarySiteWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchSummarySiteWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
