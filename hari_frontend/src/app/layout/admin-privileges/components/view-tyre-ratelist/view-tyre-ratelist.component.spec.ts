import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTyreRatelistComponent } from './view-tyre-ratelist.component';

describe('ViewTyreRatelistComponent', () => {
  let component: ViewTyreRatelistComponent;
  let fixture: ComponentFixture<ViewTyreRatelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTyreRatelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTyreRatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
