import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTruckExpensesComponent } from './site-truck-expenses.component';

describe('SiteTruckExpensesComponent', () => {
  let component: SiteTruckExpensesComponent;
  let fixture: ComponentFixture<SiteTruckExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteTruckExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTruckExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
