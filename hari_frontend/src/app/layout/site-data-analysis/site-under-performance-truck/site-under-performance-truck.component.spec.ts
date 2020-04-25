import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteUnderPerformanceTruckComponent } from './site-under-performance-truck.component';

describe('SiteUnderPerformanceTruckComponent', () => {
  let component: SiteUnderPerformanceTruckComponent;
  let fixture: ComponentFixture<SiteUnderPerformanceTruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteUnderPerformanceTruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteUnderPerformanceTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
