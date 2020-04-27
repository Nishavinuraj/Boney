import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSiteProfileComponent } from './edit-site-profile.component';

describe('EditSiteProfileComponent', () => {
  let component: EditSiteProfileComponent;
  let fixture: ComponentFixture<EditSiteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSiteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSiteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
