import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScrapSaleComponent } from './add-scrap-sale.component';

describe('AddScrapSaleComponent', () => {
  let component: AddScrapSaleComponent;
  let fixture: ComponentFixture<AddScrapSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScrapSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScrapSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
