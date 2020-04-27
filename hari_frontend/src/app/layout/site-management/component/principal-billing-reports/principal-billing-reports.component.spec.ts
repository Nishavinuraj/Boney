import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalBillingReportsComponent } from './principal-billing-reports.component';

describe('PrincipalBillingReportsComponent', () => {
  let component: PrincipalBillingReportsComponent;
  let fixture: ComponentFixture<PrincipalBillingReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalBillingReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalBillingReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
