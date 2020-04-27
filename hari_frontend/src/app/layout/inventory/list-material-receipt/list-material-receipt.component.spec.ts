import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaterialReceiptComponent } from './list-material-receipt.component';

describe('ListMaterialReceiptComponent', () => {
  let component: ListMaterialReceiptComponent;
  let fixture: ComponentFixture<ListMaterialReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMaterialReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMaterialReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
