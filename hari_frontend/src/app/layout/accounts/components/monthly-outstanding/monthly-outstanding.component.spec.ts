import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyOutstandingComponent } from './monthly-outstanding.component';

describe('MonthlyOutstandingComponent', () => {
  let component: MonthlyOutstandingComponent;
  let fixture: ComponentFixture<MonthlyOutstandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyOutstandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyOutstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
