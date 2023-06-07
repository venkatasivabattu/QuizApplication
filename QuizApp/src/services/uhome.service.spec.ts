import { TestBed } from '@angular/core/testing';

import { UhomeService } from './uhome.service';

describe('UhomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UhomeService = TestBed.get(UhomeService);
    expect(service).toBeTruthy();
  });
});
