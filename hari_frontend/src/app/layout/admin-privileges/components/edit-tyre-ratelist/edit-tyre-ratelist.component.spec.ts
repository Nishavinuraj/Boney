import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTyreRatelistComponent } from './edit-tyre-ratelist.component';

describe('EditTyreRatelistComponent', () => {
  let component: EditTyreRatelistComponent;
  let fixture: ComponentFixture<EditTyreRatelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTyreRatelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTyreRatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
