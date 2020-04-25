import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficAgentListComponent } from './traffic-agent-list.component';

describe('TrafficAgentListComponent', () => {
  let component: TrafficAgentListComponent;
  let fixture: ComponentFixture<TrafficAgentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficAgentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficAgentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
