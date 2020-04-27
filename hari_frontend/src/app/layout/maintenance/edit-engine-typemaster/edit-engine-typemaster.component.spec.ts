import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEngineTypemasterComponent } from './edit-engine-typemaster.component';

describe('EditEngineTypemasterComponent', () => {
  let component: EditEngineTypemasterComponent;
  let fixture: ComponentFixture<EditEngineTypemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEngineTypemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEngineTypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
