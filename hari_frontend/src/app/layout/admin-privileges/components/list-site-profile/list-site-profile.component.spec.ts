import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSiteProfileComponent } from './list-site-profile.component';

describe('ListSiteProfileComponent', () => {
  let component: ListSiteProfileComponent;
  let fixture: ComponentFixture<ListSiteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSiteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSiteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
