import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyreComponent } from './tyre.component';

describe('TyreComponent', () => {
  let component: TyreComponent;
  let fixture: ComponentFixture<TyreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
