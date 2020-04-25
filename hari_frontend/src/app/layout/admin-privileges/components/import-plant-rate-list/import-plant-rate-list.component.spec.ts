import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportPlantRateListComponent } from './import-plant-rate-list.component';

describe('ImportPlantRateListComponent', () => {
  let component: ImportPlantRateListComponent;
  let fixture: ComponentFixture<ImportPlantRateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportPlantRateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportPlantRateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
