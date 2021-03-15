import { TestBed } from '@angular/core/testing';

import { VillainInMemDataService } from './villain-in-mem-data.service';

describe('VillainInMemDataService', () => {
  let service: VillainInMemDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillainInMemDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
