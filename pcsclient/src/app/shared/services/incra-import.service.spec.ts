import { TestBed } from '@angular/core/testing';

import { IncraImportService } from './incra-import.service';

describe('IncraImportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncraImportService = TestBed.get(IncraImportService);
    expect(service).toBeTruthy();
  });
});
