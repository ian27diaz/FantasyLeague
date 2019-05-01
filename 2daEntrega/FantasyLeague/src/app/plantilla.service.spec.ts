import { TestBed } from '@angular/core/testing';

import { PlantillaService } from './mi-equipo/plantilla.service';

describe('PlantillaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantillaService = TestBed.get(PlantillaService);
    expect(service).toBeTruthy();
  });
});
