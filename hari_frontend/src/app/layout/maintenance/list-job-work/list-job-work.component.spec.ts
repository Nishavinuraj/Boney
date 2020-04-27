import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobWorkComponent } from './list-job-work.component';

describe('ListJobWorkComponent', () => {
  let component: ListJobWorkComponent;
  let fixture: ComponentFixture<ListJobWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJobWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
