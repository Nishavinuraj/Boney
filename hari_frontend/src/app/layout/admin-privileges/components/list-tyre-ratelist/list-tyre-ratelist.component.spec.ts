import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTyreRatelistComponent } from './list-tyre-ratelist.component';

describe('ListTyreRatelistComponent', () => {
  let component: ListTyreRatelistComponent;
  let fixture: ComponentFixture<ListTyreRatelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTyreRatelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTyreRatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
