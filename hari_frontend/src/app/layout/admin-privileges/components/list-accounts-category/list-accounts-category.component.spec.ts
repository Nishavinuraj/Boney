import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccountsCategoryComponent } from './list-accounts-category.component';

describe('ListAccountsCategoryComponent', () => {
  let component: ListAccountsCategoryComponent;
  let fixture: ComponentFixture<ListAccountsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAccountsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAccountsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
