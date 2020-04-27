import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSitePetrolpumpComponent } from './add-site-petrolpump.component';

describe('AddSitePetrolpumpComponent', () => {
  let component: AddSitePetrolpumpComponent;
  let fixture: ComponentFixture<AddSitePetrolpumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSitePetrolpumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSitePetrolpumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
