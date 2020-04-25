import { TestBed } from '@angular/core/testing';

import { TruckTyreMasterService } from './truck-tyre-master.service';

describe('TruckTyreMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TruckTyreMasterService = TestBed.get(TruckTyreMasterService);
    expect(service).toBeTruthy();
  });
});
