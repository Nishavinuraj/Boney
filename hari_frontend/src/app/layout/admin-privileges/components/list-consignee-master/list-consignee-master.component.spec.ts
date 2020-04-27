import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsigneeMasterComponent } from './list-consignee-master.component';

describe('ListConsigneeMasterComponent', () => {
  let component: ListConsigneeMasterComponent;
  let fixture: ComponentFixture<ListConsigneeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConsigneeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsigneeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
