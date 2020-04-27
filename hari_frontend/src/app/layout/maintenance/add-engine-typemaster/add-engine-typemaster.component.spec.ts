import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEngineTypemasterComponent } from './add-engine-typemaster.component';

describe('AddEngineTypemasterComponent', () => {
  let component: AddEngineTypemasterComponent;
  let fixture: ComponentFixture<AddEngineTypemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEngineTypemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEngineTypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
