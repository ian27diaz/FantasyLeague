import { Injectable } from '@angular/core';
import { Plantilla } from './Plantilla';

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {
        // public id: number,         // public equipo: number,
        // public activa: boolean,    // public formacion: string,
        // public titular1: number,   // public titular2: number,
        // public titular3: number,   // public titular4: number,
        // public titular5: number,   // public titular6: number,
        // public titular7: number,   // public titular8: number,
        // public titular9: number,   // public titular10: number,
        // public titular11: number,  // public banca1: number,
        // public banca2: number,     // public banca3: number,
        // public capitan: number,
        plantillas: Plantilla[] = [
          new Plantilla(1, 1, true, '4-3-3', 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 5),
          new Plantilla(2, 33, false, '3-5-3', 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 10),
          new Plantilla(3, 32, false, '4-4-2', 3, 4, 8, 9, 10, 15, 16, 17, 18, 24, 25, 26, 27, 28, 3),
          new Plantilla(4, 2, true, '3-4-3', 1, 2, 5, 6, 7, 11, 12, 13, 14, 19, 20, 21, 22, 23, 19),
          new Plantilla(5, 1, false, '4-4-2', 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 11),
          new Plantilla(6, 2, false, '4-3-3', 1, 2, 5, 6, 7, 11, 12, 13, 14, 19, 20, 21, 30, 23, 19)
        ];
        buscarPlantillaMiEquipo(idEquipo: number){
          return this.plantillas.find(pl => pl.equipo == idEquipo && pl.activa == true);
        }
  constructor() { }
}
