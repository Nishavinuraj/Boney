import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAssignedSiteComponent } from './agent-assigned-site.component';

describe('AgentAssignedSiteComponent', () => {
  let component: AgentAssignedSiteComponent;
  let fixture: ComponentFixture<AgentAssignedSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentAssignedSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentAssignedSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
