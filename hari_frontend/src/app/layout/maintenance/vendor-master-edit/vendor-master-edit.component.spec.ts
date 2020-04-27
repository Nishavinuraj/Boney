import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorMasterEditComponent } from './vendor-master-edit.component';

describe('VendorMasterEditComponent', () => {
  let component: VendorMasterEditComponent;
  let fixture: ComponentFixture<VendorMasterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorMasterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorMasterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
