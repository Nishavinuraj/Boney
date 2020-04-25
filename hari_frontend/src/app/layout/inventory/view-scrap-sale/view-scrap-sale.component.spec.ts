import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScrapSaleComponent } from './view-scrap-sale.component';

describe('ViewScrapSaleComponent', () => {
  let component: ViewScrapSaleComponent;
  let fixture: ComponentFixture<ViewScrapSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewScrapSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewScrapSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
