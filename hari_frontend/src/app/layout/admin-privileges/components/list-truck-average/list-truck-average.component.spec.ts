import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTruckAverageComponent } from './list-truck-average.component';

describe('ListTruckAverageComponent', () => {
  let component: ListTruckAverageComponent;
  let fixture: ComponentFixture<ListTruckAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTruckAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTruckAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
