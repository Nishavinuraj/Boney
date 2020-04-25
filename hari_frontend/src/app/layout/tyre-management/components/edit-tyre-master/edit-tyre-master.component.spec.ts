import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTyreMasterComponent } from './edit-tyre-master.component';

describe('EditTyreMasterComponent', () => {
  let component: EditTyreMasterComponent;
  let fixture: ComponentFixture<EditTyreMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTyreMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTyreMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
