import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTyreTargetMasterComponent } from './edit-tyre-target-master.component';

describe('EditTyreTargetMasterComponent', () => {
  let component: EditTyreTargetMasterComponent;
  let fixture: ComponentFixture<EditTyreTargetMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTyreTargetMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTyreTargetMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
