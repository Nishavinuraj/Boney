import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTruckPositionComponent } from './site-truck-position.component';

describe('SiteTruckPositionComponent', () => {
  let component: SiteTruckPositionComponent;
  let fixture: ComponentFixture<SiteTruckPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteTruckPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTruckPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
