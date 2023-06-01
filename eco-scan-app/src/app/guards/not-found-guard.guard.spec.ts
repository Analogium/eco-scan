import { TestBed } from '@angular/core/testing';

import { NotFoundGuardGuard } from './not-found-guard.guard';

describe('NotFoundGuardGuard', () => {
  let guard: NotFoundGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotFoundGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
