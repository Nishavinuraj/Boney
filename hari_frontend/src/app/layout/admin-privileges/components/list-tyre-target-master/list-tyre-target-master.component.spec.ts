import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTyreTargetMasterComponent } from './list-tyre-target-master.component';

describe('ListTyreTargetMasterComponent', () => {
  let component: ListTyreTargetMasterComponent;
  let fixture: ComponentFixture<ListTyreTargetMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTyreTargetMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTyreTargetMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
