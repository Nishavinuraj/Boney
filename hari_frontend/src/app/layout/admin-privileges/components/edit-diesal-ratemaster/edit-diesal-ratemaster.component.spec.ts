import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiesalRatemasterComponent } from './edit-diesal-ratemaster.component';

describe('EditDiesalRatemasterComponent', () => {
  let component: EditDiesalRatemasterComponent;
  let fixture: ComponentFixture<EditDiesalRatemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDiesalRatemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiesalRatemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
