import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBilltyDataentryComponent } from './add-billty-dataentry.component';

describe('AddBilltyDataentryComponent', () => {
  let component: AddBilltyDataentryComponent;
  let fixture: ComponentFixture<AddBilltyDataentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBilltyDataentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBilltyDataentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
