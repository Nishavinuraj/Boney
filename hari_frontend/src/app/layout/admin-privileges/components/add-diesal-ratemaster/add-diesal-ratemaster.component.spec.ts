import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiesalRatemasterComponent } from './add-diesal-ratemaster.component';

describe('AddDiesalRatemasterComponent', () => {
  let component: AddDiesalRatemasterComponent;
  let fixture: ComponentFixture<AddDiesalRatemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiesalRatemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiesalRatemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
