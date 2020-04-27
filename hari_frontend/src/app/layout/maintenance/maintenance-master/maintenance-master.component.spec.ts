import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceMasterComponent } from './maintenance-master.component';

describe('MaintenanceMasterComponent', () => {
  let component: MaintenanceMasterComponent;
  let fixture: ComponentFixture<MaintenanceMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
