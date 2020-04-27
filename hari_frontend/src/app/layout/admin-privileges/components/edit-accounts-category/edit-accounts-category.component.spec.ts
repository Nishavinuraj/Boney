import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountsCategoryComponent } from './edit-accounts-category.component';

describe('EditAccountsCategoryComponent', () => {
  let component: EditAccountsCategoryComponent;
  let fixture: ComponentFixture<EditAccountsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccountsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
