import { TestBed, inject } from '@angular/core/testing';

import { FStoreService } from './f-store.service';

describe('FStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FStoreService]
    });
  });

  it('should be created', inject([FStoreService], (service: FStoreService) => {
    expect(service).toBeTruthy();
  }));
});
