import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsRateListComponent } from './plants-rate-list.component';

describe('PlantsRateListComponent', () => {
  let component: PlantsRateListComponent;
  let fixture: ComponentFixture<PlantsRateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantsRateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsRateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
