import { TestBed } from '@angular/core/testing';

import { UniversityFormService } from './university-form.service';

describe('UniversityFormService', () => {
  let service: UniversityFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversityFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
