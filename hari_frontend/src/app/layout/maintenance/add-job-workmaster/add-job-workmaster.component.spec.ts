import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobWorkmasterComponent } from './add-job-workmaster.component';

describe('AddJobWorkmasterComponent', () => {
  let component: AddJobWorkmasterComponent;
  let fixture: ComponentFixture<AddJobWorkmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobWorkmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobWorkmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
