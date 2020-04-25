import { TestBed } from '@angular/core/testing';

import { AdminprivilegesService } from './adminprivileges.service';

describe('AdminprivilegesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminprivilegesService = TestBed.get(AdminprivilegesService);
    expect(service).toBeTruthy();
  });
});
