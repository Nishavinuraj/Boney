import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccountsDataentryComponent } from './list-accounts-dataentry.component';

describe('ListAccountsDataentryComponent', () => {
  let component: ListAccountsDataentryComponent;
  let fixture: ComponentFixture<ListAccountsDataentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAccountsDataentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAccountsDataentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
