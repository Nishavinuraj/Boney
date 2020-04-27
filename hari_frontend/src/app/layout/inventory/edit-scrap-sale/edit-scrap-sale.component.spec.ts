import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScrapSaleComponent } from './edit-scrap-sale.component';

describe('EditScrapSaleComponent', () => {
  let component: EditScrapSaleComponent;
  let fixture: ComponentFixture<EditScrapSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditScrapSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditScrapSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
