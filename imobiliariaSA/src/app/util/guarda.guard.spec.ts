import { TestBed } from '@angular/core/testing';

import { GuardaGuard } from './guarda.guard';

describe('GuardaGuard', () => {
  let guard: GuardaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
