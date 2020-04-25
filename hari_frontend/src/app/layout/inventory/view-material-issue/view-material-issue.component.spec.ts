import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMaterialIssueComponent } from './view-material-issue.component';

describe('ViewMaterialIssueComponent', () => {
  let component: ViewMaterialIssueComponent;
  let fixture: ComponentFixture<ViewMaterialIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMaterialIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMaterialIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
