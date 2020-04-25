import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobWorkComponent } from './edit-job-work.component';

describe('EditJobWorkComponent', () => {
  let component: EditJobWorkComponent;
  let fixture: ComponentFixture<EditJobWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJobWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJobWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
