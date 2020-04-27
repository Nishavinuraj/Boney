import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsigneeMasterComponent } from './edit-consignee-master.component';

describe('EditConsigneeMasterComponent', () => {
  let component: EditConsigneeMasterComponent;
  let fixture: ComponentFixture<EditConsigneeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConsigneeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConsigneeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
