import { TestBed } from '@angular/core/testing';

import { LogimService } from './logim.service';

describe('LogimService', () => {
  let service: LogimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
