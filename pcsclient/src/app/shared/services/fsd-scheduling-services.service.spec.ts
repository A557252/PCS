import { TestBed } from '@angular/core/testing';

import { FsdSchedulingServicesService } from './fsd-scheduling-services.service';

describe('FsdSchedulingServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FsdSchedulingServicesService = TestBed.get(FsdSchedulingServicesService);
    expect(service).toBeTruthy();
  });
});
