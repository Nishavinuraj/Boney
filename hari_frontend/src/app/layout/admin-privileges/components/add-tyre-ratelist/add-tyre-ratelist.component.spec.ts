import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTyreRatelistComponent } from './add-tyre-ratelist.component';

describe('AddTyreRatelistComponent', () => {
  let component: AddTyreRatelistComponent;
  let fixture: ComponentFixture<AddTyreRatelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTyreRatelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTyreRatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
