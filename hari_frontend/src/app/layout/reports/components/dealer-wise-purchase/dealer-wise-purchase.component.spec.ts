import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerWisePurchaseComponent } from './dealer-wise-purchase.component';

describe('DealerWisePurchaseComponent', () => {
  let component: DealerWisePurchaseComponent;
  let fixture: ComponentFixture<DealerWisePurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerWisePurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerWisePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
