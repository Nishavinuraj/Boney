import { TestBed } from '@angular/core/testing';

import { UserCreationServiceService } from './user-creation-service.service';

describe('UserCreationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCreationServiceService = TestBed.get(UserCreationServiceService);
    expect(service).toBeTruthy();
  });
});
