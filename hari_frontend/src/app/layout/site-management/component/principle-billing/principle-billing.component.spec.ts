import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleBillingComponent } from './principle-billing.component';

describe('PrincipleBillingComponent', () => {
  let component: PrincipleBillingComponent;
  let fixture: ComponentFixture<PrincipleBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipleBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipleBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
