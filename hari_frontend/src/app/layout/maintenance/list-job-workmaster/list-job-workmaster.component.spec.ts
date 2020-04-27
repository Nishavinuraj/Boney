import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobWorkmasterComponent } from './list-job-workmaster.component';

describe('ListJobWorkmasterComponent', () => {
  let component: ListJobWorkmasterComponent;
  let fixture: ComponentFixture<ListJobWorkmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJobWorkmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobWorkmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
