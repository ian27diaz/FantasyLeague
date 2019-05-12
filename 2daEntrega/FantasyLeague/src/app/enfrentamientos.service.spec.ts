import { TestBed } from '@angular/core/testing';

import { EnfrentamientosService } from './liga/enfrentamientos/enfrentamientos.service';

describe('EnfrentamientosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnfrentamientosService = TestBed.get(EnfrentamientosService);
    expect(service).toBeTruthy();
  });
});
