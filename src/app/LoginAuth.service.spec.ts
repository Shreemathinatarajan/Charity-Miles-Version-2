/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginAuthService } from './LoginAuth.service';

describe('Service: LoginAuth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAuthService]
    });
  });

  it('should ...', inject([LoginAuthService], (service: LoginAuthService) => {
    expect(service).toBeTruthy();
  }));
});
