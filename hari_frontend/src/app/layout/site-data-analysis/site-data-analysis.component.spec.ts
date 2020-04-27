import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDataAnalysisComponent } from './site-data-analysis.component';

describe('SiteDataAnalysisComponent', () => {
  let component: SiteDataAnalysisComponent;
  let fixture: ComponentFixture<SiteDataAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteDataAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDataAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
