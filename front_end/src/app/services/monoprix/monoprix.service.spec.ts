import { TestBed } from '@angular/core/testing';

import { MonoprixService } from './monoprix.service';

describe('MonoprixService', () => {
  let service: MonoprixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonoprixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
