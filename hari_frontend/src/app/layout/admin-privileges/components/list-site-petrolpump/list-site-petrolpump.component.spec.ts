import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSitePetrolpumpComponent } from './list-site-petrolpump.component';

describe('ListSitePetrolpumpComponent', () => {
  let component: ListSitePetrolpumpComponent;
  let fixture: ComponentFixture<ListSitePetrolpumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSitePetrolpumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSitePetrolpumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
