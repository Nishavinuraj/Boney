import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckHistoryComponent } from './truck-history.component';

describe('TruckHistoryComponent', () => {
  let component: TruckHistoryComponent;
  let fixture: ComponentFixture<TruckHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
