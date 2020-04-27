import { TestBed } from '@angular/core/testing';

import { TrafficAgentService } from './traffic-agent.service';

describe('TrafficAgentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrafficAgentService = TestBed.get(TrafficAgentService);
    expect(service).toBeTruthy();
  });
});
