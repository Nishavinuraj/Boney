import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountsDataentryComponent } from './add-accounts-dataentry.component';

describe('AddAccountsDataentryComponent', () => {
  let component: AddAccountsDataentryComponent;
  let fixture: ComponentFixture<AddAccountsDataentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccountsDataentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountsDataentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
