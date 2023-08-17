/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CancelAppService } from './CancelApp.service';

describe('Service: CancelApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CancelAppService]
    });
  });

  it('should ...', inject([CancelAppService], (service: CancelAppService) => {
    expect(service).toBeTruthy();
  }));
});
