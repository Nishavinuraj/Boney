import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTyreCompanyMasterComponent } from './edit-tyre-company-master.component';

describe('EditTyreCompanyMasterComponent', () => {
  let component: EditTyreCompanyMasterComponent;
  let fixture: ComponentFixture<EditTyreCompanyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTyreCompanyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTyreCompanyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
