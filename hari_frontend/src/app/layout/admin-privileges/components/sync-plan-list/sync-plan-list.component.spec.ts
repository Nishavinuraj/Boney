import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncPlanListComponent } from './sync-plan-list.component';

describe('SyncPlanListComponent', () => {
  let component: SyncPlanListComponent;
  let fixture: ComponentFixture<SyncPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
