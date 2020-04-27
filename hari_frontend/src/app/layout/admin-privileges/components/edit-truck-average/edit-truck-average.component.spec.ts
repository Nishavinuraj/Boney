import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTruckAverageComponent } from './edit-truck-average.component';

describe('EditTruckAverageComponent', () => {
  let component: EditTruckAverageComponent;
  let fixture: ComponentFixture<EditTruckAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTruckAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTruckAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
