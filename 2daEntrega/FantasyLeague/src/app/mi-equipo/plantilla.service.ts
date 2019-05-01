import { Injectable } from '@angular/core';
import { Plantilla } from './Plantilla';

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {
        constructor() { }
        // public id: number,
        // public equipo: number,
        // public activa: boolean,
        // public formacion: string,
        // public titular1: number,
        // public titular2: number,
        // public titular3: number,
        // public titular4: number,
        // public titular5: number,
        // public titular6: number,
        // public titular7: number,
        // public titular8: number,
        // public titular9: number,
        // public titular10: number,
        // public titular11: number,
        // public banca1: number,
        // public banca2: number,
        // public banca3: number,
        // public capitan: number
        plantillas: Plantilla[] = [
          new Plantilla(1, 1, true, '4-3-3', 1, 26, 51, 82, 106, 127, 146, 162, 185, 208, 236, 16, 41, 71, 82),
          new Plantilla(2, 33, false, '3-5-3', 7, 36, 53, 90, 116, 133, 157, 167, 191, 223, 238, 11, 37, 55, 90),
          new Plantilla(3, 32, false, '4-4-2', 11, 37, 55, 91, 121, 135, 159, 171, 201, 228, 242, 7, 36, 53, 121),
          new Plantilla(4, 2, true, '3-4-3', 16, 41, 71, 94, 123, 136, 160, 175, 207, 234, 244, 1, 26, 51, 160),
          new Plantilla(5, 1, false, '4-4-2', 1, 26, 51, 82, 106, 127, 146, 162, 185, 208, 236, 16, 41, 71, 82),
          new Plantilla(6, 2, false, '4-3-3', 16, 41, 71, 94, 123, 136, 160, 175, 207, 234, 244, 1, 26, 51, 160)
        ];
        buscarPlantillaMiEquipo(idEquipo: number){
          return Object.assign({}, this.plantillas.find(pl => pl.equipo == idEquipo && pl.activa == true));
        }

        actualizarFormacionMiEquipo(idPlantilla: number, formacion: string){
          this.plantillas[idPlantilla].formacion = formacion;
          console.log(idPlantilla + ' En Plantilla Service: \n' + JSON.stringify(this.plantillas[idPlantilla]));
        }
}
