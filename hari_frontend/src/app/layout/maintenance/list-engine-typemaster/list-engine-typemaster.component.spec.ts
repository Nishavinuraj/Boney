import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEngineTypemasterComponent } from './list-engine-typemaster.component';

describe('ListEngineTypemasterComponent', () => {
  let component: ListEngineTypemasterComponent;
  let fixture: ComponentFixture<ListEngineTypemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEngineTypemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEngineTypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
