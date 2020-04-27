import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSiteDestinationkmsComponent } from './list-site-destinationkms.component';

describe('ListSiteDestinationkmsComponent', () => {
  let component: ListSiteDestinationkmsComponent;
  let fixture: ComponentFixture<ListSiteDestinationkmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSiteDestinationkmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSiteDestinationkmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
