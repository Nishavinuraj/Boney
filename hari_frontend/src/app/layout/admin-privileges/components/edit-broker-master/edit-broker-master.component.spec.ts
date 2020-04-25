import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBrokerMasterComponent } from './edit-broker-master.component';

describe('EditBrokerMasterComponent', () => {
  let component: EditBrokerMasterComponent;
  let fixture: ComponentFixture<EditBrokerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBrokerMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBrokerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
