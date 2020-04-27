import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccountsMasterComponent } from './list-accounts-master.component';

describe('ListAccountsMasterComponent', () => {
  let component: ListAccountsMasterComponent;
  let fixture: ComponentFixture<ListAccountsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAccountsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAccountsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
