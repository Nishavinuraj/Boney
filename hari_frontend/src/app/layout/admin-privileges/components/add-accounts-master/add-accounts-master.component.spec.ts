import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountsMasterComponent } from './add-accounts-master.component';

describe('AddAccountsMasterComponent', () => {
  let component: AddAccountsMasterComponent;
  let fixture: ComponentFixture<AddAccountsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccountsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
