import { TestBed } from '@angular/core/testing';

import { RestMatchService } from './rest.match.service';

describe('RestUserService', () => {
  let service: RestMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
