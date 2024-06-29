import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { formStatusGuard } from './form-status.guard';

describe('formStatusGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => formStatusGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
