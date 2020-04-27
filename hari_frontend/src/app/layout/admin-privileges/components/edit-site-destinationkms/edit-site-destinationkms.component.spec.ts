import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSiteDestinationkmsComponent } from './edit-site-destinationkms.component';

describe('EditSiteDestinationkmsComponent', () => {
  let component: EditSiteDestinationkmsComponent;
  let fixture: ComponentFixture<EditSiteDestinationkmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSiteDestinationkmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSiteDestinationkmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
