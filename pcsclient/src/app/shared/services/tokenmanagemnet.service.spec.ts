import { TestBed } from '@angular/core/testing';

import { TokenmanagemnetService } from './tokenmanagemnet.service';

describe('TokenmanagemnetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenmanagemnetService = TestBed.get(TokenmanagemnetService);
    expect(service).toBeTruthy();
  });
});
