import { TestBed } from '@angular/core/testing';

import { SitemanagementService } from './sitemanagement.service';

describe('SitemanagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SitemanagementService = TestBed.get(SitemanagementService);
    expect(service).toBeTruthy();
  });
});
