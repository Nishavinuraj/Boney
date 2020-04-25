import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBrokerMasterComponent } from './list-broker-master.component';

describe('ListBrokerMasterComponent', () => {
  let component: ListBrokerMasterComponent;
  let fixture: ComponentFixture<ListBrokerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBrokerMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBrokerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
