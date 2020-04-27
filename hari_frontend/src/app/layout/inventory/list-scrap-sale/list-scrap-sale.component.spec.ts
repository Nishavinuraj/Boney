import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScrapSaleComponent } from './list-scrap-sale.component';

describe('ListScrapSaleComponent', () => {
  let component: ListScrapSaleComponent;
  let fixture: ComponentFixture<ListScrapSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListScrapSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListScrapSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
