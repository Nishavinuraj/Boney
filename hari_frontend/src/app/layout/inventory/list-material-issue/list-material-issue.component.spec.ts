import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaterialIssueComponent } from './list-material-issue.component';

describe('ListMaterialIssueComponent', () => {
  let component: ListMaterialIssueComponent;
  let fixture: ComponentFixture<ListMaterialIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMaterialIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMaterialIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
