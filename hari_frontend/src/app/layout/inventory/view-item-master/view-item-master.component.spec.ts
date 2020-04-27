import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemMasterComponent } from './view-item-master.component';

describe('ViewItemMasterComponent', () => {
  let component: ViewItemMasterComponent;
  let fixture: ComponentFixture<ViewItemMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewItemMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
