import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDispatchSummaryComponent } from './site-dispatch-summary.component';

describe('SiteDispatchSummaryComponent', () => {
  let component: SiteDispatchSummaryComponent;
  let fixture: ComponentFixture<SiteDispatchSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteDispatchSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDispatchSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
