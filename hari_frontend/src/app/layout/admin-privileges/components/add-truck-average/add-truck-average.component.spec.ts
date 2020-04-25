import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTruckAverageComponent } from './add-truck-average.component';

describe('AddTruckAverageComponent', () => {
  let component: AddTruckAverageComponent;
  let fixture: ComponentFixture<AddTruckAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTruckAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTruckAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
