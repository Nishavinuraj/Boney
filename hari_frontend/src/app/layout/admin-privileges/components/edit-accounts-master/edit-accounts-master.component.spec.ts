import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountsMasterComponent } from './edit-accounts-master.component';

describe('EditAccountsMasterComponent', () => {
  let component: EditAccountsMasterComponent;
  let fixture: ComponentFixture<EditAccountsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccountsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
