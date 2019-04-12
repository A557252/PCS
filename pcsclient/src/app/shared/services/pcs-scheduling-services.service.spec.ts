import { TestBed } from '@angular/core/testing';

import { PcsSchedulingServicesService } from './pcs-scheduling-services.service';

describe('PcsSchedulingServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PcsSchedulingServicesService = TestBed.get(PcsSchedulingServicesService);
    expect(service).toBeTruthy();
  });
});
