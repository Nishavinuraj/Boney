import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountsDataentryComponent } from './edit-accounts-dataentry.component';

describe('EditAccountsDataentryComponent', () => {
  let component: EditAccountsDataentryComponent;
  let fixture: ComponentFixture<EditAccountsDataentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccountsDataentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountsDataentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
