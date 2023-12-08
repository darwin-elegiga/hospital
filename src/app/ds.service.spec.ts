import { TestBed } from '@angular/core/testing';

import { DSService } from './ds.service';

describe('DSService', () => {
  let service: DSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
