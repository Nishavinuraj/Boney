import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsRateListComponent } from './gps-rate-list.component';

describe('GpsRateListComponent', () => {
  let component: GpsRateListComponent;
  let fixture: ComponentFixture<GpsRateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsRateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsRateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
