import { Injectable } from '@angular/core';
import { Equipo } from './Equipo';

@Injectable({
  providedIn: 'root'
})

        //public id: number,
        //public nombre: string,
        //public escudo: string,
        //public propietario: number,
        //public liga: number,
        //public puntos: number,
        //public plantilla: number,
        //public presupuesto: number

export class EquiposService {
  equipos: Equipo[] = [
    new Equipo(1, 'Luis Fernando`s Team', 'assets/images/EscudosEquipos/EscudoEquipo-19.jpg', 1, 1, 20, 1, 500),
    new Equipo(2, 'Pallacracks', 'assets/images/EscudosEquipos/EscudoEquipo-2.jpg', 1, 2, 20, 2, 500),
    new Equipo(3, 'Mickey Mouse', 'assets/images/EscudosEquipos/EscudoEquipo-3.jpg', 2, 1, 23, 3, 500),
    new Equipo(4, 'URSS', 'assets/images/EscudosEquipos/EscudoEquipo-1.jpg', 2, 2, 23, 4, 500),
    new Equipo(5, 'La Vaca MU', 'assets/images/EscudosEquipos/EscudoEquipo-8.jpg', 3, 1, 18, 5, 500),
    new Equipo(6, 'Los Vengadores', 'assets/images/EscudosEquipos/EscudoEquipo-4.jpg', 3, 2, 18, 6, 500)
  ];
  constructor() { }

  getEquipo(): Equipo[] {
    return this.equipos.slice();
  }
}
