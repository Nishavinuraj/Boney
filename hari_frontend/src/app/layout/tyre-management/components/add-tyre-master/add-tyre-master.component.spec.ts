import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTyreMasterComponent } from './add-tyre-master.component';

describe('AddTyreMasterComponent', () => {
  let component: AddTyreMasterComponent;
  let fixture: ComponentFixture<AddTyreMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTyreMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTyreMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
