import { TestBed } from '@angular/core/testing';

import { HttpClientVillainService } from './http-client-villain.service';

describe('HttpClientVillainService', () => {
  let service: HttpClientVillainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientVillainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
