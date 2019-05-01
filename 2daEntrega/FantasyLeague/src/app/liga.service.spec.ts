import { TestBed } from '@angular/core/testing';

import { LigaService } from './liga/liga.service';

describe('LigaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LigaService = TestBed.get(LigaService);
    expect(service).toBeTruthy();
  });
});
