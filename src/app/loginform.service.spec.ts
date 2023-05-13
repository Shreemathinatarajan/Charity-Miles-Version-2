/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginformService } from './loginform.service';

describe('Service: Loginform', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginformService]
    });
  });

  it('should ...', inject([LoginformService], (service: LoginformService) => {
    expect(service).toBeTruthy();
  }));
});
