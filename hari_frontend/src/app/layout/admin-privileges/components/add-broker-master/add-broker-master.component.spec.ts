import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrokerMasterComponent } from './add-broker-master.component';

describe('AddBrokerMasterComponent', () => {
  let component: AddBrokerMasterComponent;
  let fixture: ComponentFixture<AddBrokerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBrokerMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBrokerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
