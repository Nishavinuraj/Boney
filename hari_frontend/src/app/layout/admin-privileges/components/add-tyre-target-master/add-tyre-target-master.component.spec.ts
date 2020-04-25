import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTyreTargetMasterComponent } from './add-tyre-target-master.component';

describe('AddTyreTargetMasterComponent', () => {
  let component: AddTyreTargetMasterComponent;
  let fixture: ComponentFixture<AddTyreTargetMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTyreTargetMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTyreTargetMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
