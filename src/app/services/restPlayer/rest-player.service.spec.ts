import { TestBed } from '@angular/core/testing';

import { RestPlayerService } from './rest-player.service';

describe('RestPlayerService', () => {
  let service: RestPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});