import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDispsummaryComponent } from './site-dispsummary.component';

describe('SiteDispsummaryComponent', () => {
  let component: SiteDispsummaryComponent;
  let fixture: ComponentFixture<SiteDispsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteDispsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDispsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
