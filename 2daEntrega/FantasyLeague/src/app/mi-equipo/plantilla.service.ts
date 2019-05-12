import { Injectable } from '@angular/core';
import { Plantilla } from './Plantilla';
import { Equipo } from './Equipo';

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {
        constructor() { }
        // public id: number,
        // public equipo: number,
        //public jornada; number,
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
        lastID: number = 1;
        plantillas: Plantilla[] = [
          new Plantilla(1, 1, 2, true, '4-3-3', 1, 26, 51, 82, 106, 127, 146, 162, 185, 208, 236, 16, 41, 71, 0, 123, 136, 160, 0, 82),
          new Plantilla(2, 33, 2, true, '3-5-3', 7, 36, 53, 90, 116, 133, 157, 167, 191, 223, 238, 11, 37, 55, 0, 0, 0, 0, 0, 90),
          new Plantilla(3, 32, 2, true, '4-4-2', 11, 37, 55, 91, 121, 135, 159, 171, 201, 228, 242, 7, 36, 53, 121, 0, 0 , 0, 0, 91),
          new Plantilla(4, 2, 2, true, '3-4-3', 16, 41, 71, 94, 123, 136, 160, 175, 207, 234, 244, 1, 26, 51, 0, 0, 0, 0, 0, 41),
          new Plantilla(5, 1, 1, false, '4-4-2', 1, 26, 51, 82, 106, 127, 146, 162, 185, 208, 236, 16, 41, 71, 0, 0, 0, 0, 0, 1),
          new Plantilla(6, 2, 1, false, '4-3-3', 16, 41, 71, 94, 123, 136, 160, 175, 207, 234, 244, 1, 26, 51, 0, 0, 0, 0, 0, 123),
          new Plantilla(7, 33, 1, false, '3-5-3', 7, 36, 53, 90, 116, 133, 157, 167, 191, 223, 238, 11, 37, 55, 0, 0, 0, 0, 0, 201),
          new Plantilla(8, 32, 1, false, '4-4-2', 11, 37, 55, 91, 121, 135, 159, 171, 201, 228, 242, 7, 36, 53, 0, 0, 0 , 0, 0, 91),
          new Plantilla(10, 1, 1, false, '3-4-3', 1, 26, 51, 82, 106, 127, 146, 162, 185, 208, 236, 16, 41, 71, 0, 0, 0, 0, 0, 1),
          new Plantilla(9, 33, 1, false, '4-5-1', 7, 36, 53, 90, 116, 133, 157, 167, 191, 223, 238, 11, 37, 55, 0, 0, 0, 0, 0, 201)
        ];
        buscarPlantillaMiEquipo(idEquipo: number) {
          return Object.assign({}, this.plantillas.find(pl => pl.equipo == idEquipo && pl.activa == true));
        }


        actualizarFormacionMiEquipo(idPlantilla: number, formacion: string) {
          for(let i = 0; i<this.plantillas.length; i++){
            if(this.plantillas[i].id==idPlantilla){
              this.plantillas[i].formacion = formacion;
              break;
            }
          }
        }

        actualizarPlantillaJugador(plantilla) {
          for(let i = 0; i<this.plantillas.length; i++){
            if(this.plantillas[i].id==plantilla.id){
              this.plantillas[i] = plantilla;
              break;
            }
          }
        }

        crearPlantillasNuevas(idEquipo) {
            this.plantillas.push(new Plantilla(this.lastID++, idEquipo, 1, true, '4-3-3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1));
            for (let i = 2; i <= 38; i++) {
              this.plantillas.push(new Plantilla(this.lastID++, idEquipo, i, false, '4-3-3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1));
            }
        }

        getPlantillaByEquipoJornada(idEquipo, jornada):number{
          return this.plantillas.find((pl)=>pl.equipo==idEquipo && pl.jornada == jornada).id;
        }
}
