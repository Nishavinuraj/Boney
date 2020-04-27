import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetTargetsComponent } from './fleet-targets.component';

describe('FleetTargetsComponent', () => {
  let component: FleetTargetsComponent;
  let fixture: ComponentFixture<FleetTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
