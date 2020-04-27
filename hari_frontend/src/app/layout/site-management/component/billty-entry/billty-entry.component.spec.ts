import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilltyEntryComponent } from './billty-entry.component';

describe('BilltyEntryComponent', () => {
  let component: BilltyEntryComponent;
  let fixture: ComponentFixture<BilltyEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilltyEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilltyEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
