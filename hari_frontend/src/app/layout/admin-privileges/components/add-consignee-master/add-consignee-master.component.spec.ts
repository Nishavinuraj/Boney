import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsigneeMasterComponent } from './add-consignee-master.component';

describe('AddConsigneeMasterComponent', () => {
  let component: AddConsigneeMasterComponent;
  let fixture: ComponentFixture<AddConsigneeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConsigneeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsigneeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
