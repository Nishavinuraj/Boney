import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMultipleDestinationComponent } from './site-multiple-destination.component';

describe('SiteMultipleDestinationComponent', () => {
  let component: SiteMultipleDestinationComponent;
  let fixture: ComponentFixture<SiteMultipleDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteMultipleDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteMultipleDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
