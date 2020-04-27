import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreationEditComponent } from './user-creation-edit.component';

describe('UserCreationEditComponent', () => {
  let component: UserCreationEditComponent;
  let fixture: ComponentFixture<UserCreationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
