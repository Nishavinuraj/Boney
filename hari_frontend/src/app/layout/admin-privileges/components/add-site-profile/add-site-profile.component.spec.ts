import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteProfileComponent } from './add-site-profile.component';

describe('AddSiteProfileComponent', () => {
  let component: AddSiteProfileComponent;
  let fixture: ComponentFixture<AddSiteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSiteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
