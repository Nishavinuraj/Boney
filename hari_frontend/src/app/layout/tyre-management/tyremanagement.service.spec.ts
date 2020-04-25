import { TestBed } from '@angular/core/testing';

import { TyremanagementService } from './tyremanagement.service';

describe('TyremanagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TyremanagementService = TestBed.get(TyremanagementService);
    expect(service).toBeTruthy();
  });
});
