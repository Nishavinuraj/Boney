import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTyreMasterComponent } from './list-tyre-master.component';

describe('ListTyreMasterComponent', () => {
  let component: ListTyreMasterComponent;
  let fixture: ComponentFixture<ListTyreMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTyreMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTyreMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
