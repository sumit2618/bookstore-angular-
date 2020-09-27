import { TestBed } from '@angular/core/testing';

import { AuthenauthenticationService } from './authenauthentication.service';

describe('AuthenauthenticationService', () => {
  let service: AuthenauthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenauthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
