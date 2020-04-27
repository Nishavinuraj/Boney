import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDiesalRatemasterComponent } from './list-diesal-ratemaster.component';

describe('ListDiesalRatemasterComponent', () => {
  let component: ListDiesalRatemasterComponent;
  let fixture: ComponentFixture<ListDiesalRatemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDiesalRatemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDiesalRatemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
