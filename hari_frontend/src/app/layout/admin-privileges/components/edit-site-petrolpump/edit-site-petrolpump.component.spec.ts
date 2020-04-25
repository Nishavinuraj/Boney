import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSitePetrolpumpComponent } from './edit-site-petrolpump.component';

describe('EditSitePetrolpumpComponent', () => {
  let component: EditSitePetrolpumpComponent;
  let fixture: ComponentFixture<EditSitePetrolpumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSitePetrolpumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSitePetrolpumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
