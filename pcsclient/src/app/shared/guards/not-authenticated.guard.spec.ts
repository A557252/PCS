import { TestBed, async, inject } from '@angular/core/testing';

import { NotAuthenticatedGuard } from './not-authenticated.guard';

describe('NotAuthenticatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotAuthenticatedGuard]
    });
  });


});
