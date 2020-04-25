import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTyreCompanyMasterComponent } from './list-tyre-company-master.component';

describe('ListTyreCompanyMasterComponent', () => {
  let component: ListTyreCompanyMasterComponent;
  let fixture: ComponentFixture<ListTyreCompanyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTyreCompanyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTyreCompanyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
