import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraReturnExpencesComponent } from './extra-return-expences.component';

describe('ExtraReturnExpencesComponent', () => {
  let component: ExtraReturnExpencesComponent;
  let fixture: ComponentFixture<ExtraReturnExpencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraReturnExpencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraReturnExpencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
