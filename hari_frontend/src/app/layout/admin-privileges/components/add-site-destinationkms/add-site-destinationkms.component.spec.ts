import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteDestinationkmsComponent } from './add-site-destinationkms.component';

describe('AddSiteDestinationkmsComponent', () => {
  let component: AddSiteDestinationkmsComponent;
  let fixture: ComponentFixture<AddSiteDestinationkmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSiteDestinationkmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiteDestinationkmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
