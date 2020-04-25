import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTyreCompanyMasterComponent } from './view-tyre-company-master.component';

describe('ViewTyreCompanyMasterComponent', () => {
  let component: ViewTyreCompanyMasterComponent;
  let fixture: ComponentFixture<ViewTyreCompanyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTyreCompanyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTyreCompanyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
