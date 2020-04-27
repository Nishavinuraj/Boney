import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBilltyDataentryComponent } from './list-billty-dataentry.component';

describe('ListBilltyDataentryComponent', () => {
  let component: ListBilltyDataentryComponent;
  let fixture: ComponentFixture<ListBilltyDataentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBilltyDataentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBilltyDataentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
