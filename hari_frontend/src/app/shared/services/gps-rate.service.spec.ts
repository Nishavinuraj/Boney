import { TestBed } from '@angular/core/testing';

import { GpsRateService } from './gps-rate.service';

describe('GpsRateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpsRateService = TestBed.get(GpsRateService);
    expect(service).toBeTruthy();
  });
});
