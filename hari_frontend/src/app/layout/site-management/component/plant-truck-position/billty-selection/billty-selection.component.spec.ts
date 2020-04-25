import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilltySelectionComponent } from './billty-selection.component';

describe('BilltySelectionComponent', () => {
  let component: BilltySelectionComponent;
  let fixture: ComponentFixture<BilltySelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilltySelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilltySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
