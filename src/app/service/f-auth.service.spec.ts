import { TestBed, inject } from '@angular/core/testing';

import { FAuthService } from './f-auth.service';

describe('FAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FAuthService]
    });
  });

  it('should be created', inject([FAuthService], (service: FAuthService) => {
    expect(service).toBeTruthy();
  }));
});
