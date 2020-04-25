import { TestBed } from '@angular/core/testing';

import { AdminPrivilegesService } from './admin-privileges.service';

describe('AdminPrivilegesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminPrivilegesService = TestBed.get(AdminPrivilegesService);
    expect(service).toBeTruthy();
  });
});
