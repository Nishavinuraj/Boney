import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBilltyDataentryComponent } from './edit-billty-dataentry.component';

describe('EditBilltyDataentryComponent', () => {
  let component: EditBilltyDataentryComponent;
  let fixture: ComponentFixture<EditBilltyDataentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBilltyDataentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBilltyDataentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
