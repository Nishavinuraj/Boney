import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaterialReceiptComponent } from './edit-material-receipt.component';

describe('EditMaterialReceiptComponent', () => {
  let component: EditMaterialReceiptComponent;
  let fixture: ComponentFixture<EditMaterialReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMaterialReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMaterialReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
