import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSiteTruckExpenseComponent } from './import-site-truck-expense.component';

describe('ImportSiteTruckExpenseComponent', () => {
  let component: ImportSiteTruckExpenseComponent;
  let fixture: ComponentFixture<ImportSiteTruckExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportSiteTruckExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportSiteTruckExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
