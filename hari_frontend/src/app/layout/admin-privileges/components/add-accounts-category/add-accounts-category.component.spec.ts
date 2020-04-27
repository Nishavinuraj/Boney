import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountsCategoryComponent } from './add-accounts-category.component';

describe('AddAccountsCategoryComponent', () => {
  let component: AddAccountsCategoryComponent;
  let fixture: ComponentFixture<AddAccountsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccountsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
