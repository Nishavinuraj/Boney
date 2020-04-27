import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTyreCompanyMasterComponent } from './add-tyre-company-master.component';

describe('AddTyreCompanyMasterComponent', () => {
  let component: AddTyreCompanyMasterComponent;
  let fixture: ComponentFixture<AddTyreCompanyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTyreCompanyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTyreCompanyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
