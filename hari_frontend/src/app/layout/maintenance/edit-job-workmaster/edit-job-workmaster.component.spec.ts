import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobWorkmasterComponent } from './edit-job-workmaster.component';

describe('EditJobWorkmasterComponent', () => {
  let component: EditJobWorkmasterComponent;
  let fixture: ComponentFixture<EditJobWorkmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJobWorkmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJobWorkmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
