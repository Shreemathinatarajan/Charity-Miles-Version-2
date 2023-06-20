/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdmineventService } from './adminevent.service';

describe('Service: Adminevent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmineventService]
    });
  });

  it('should ...', inject([AdmineventService], (service: AdmineventService) => {
    expect(service).toBeTruthy();
  }));
});
