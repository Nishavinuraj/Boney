import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyreRemovalReportComponent } from './tyre-removal-report.component';

describe('TyreRemovalReportComponent', () => {
  let component: TyreRemovalReportComponent;
  let fixture: ComponentFixture<TyreRemovalReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyreRemovalReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyreRemovalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
