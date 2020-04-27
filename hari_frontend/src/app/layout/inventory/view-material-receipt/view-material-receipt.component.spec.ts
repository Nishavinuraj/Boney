import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMaterialReceiptComponent } from './view-material-receipt.component';

describe('ViewMaterialReceiptComponent', () => {
  let component: ViewMaterialReceiptComponent;
  let fixture: ComponentFixture<ViewMaterialReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMaterialReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMaterialReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
