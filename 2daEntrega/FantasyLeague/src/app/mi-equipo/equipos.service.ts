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
        //public presupuesto: number

export class EquiposService {
  equipos: Equipo[] = [
    new Equipo(1, 'Luis Fernando`s Team', 'assets/images/EscudosEquipos/EscudoEquipo-1.jpg', 1, 1, 20, 5000),
    new Equipo(2, 'Pallacracks', 'assets/images/EscudosEquipos/EscudoEquipo-2.jpg', 1, 2, 20, 5000),
    new Equipo(3, 'Mickey Mouse', 'assets/images/EscudosEquipos/EscudoEquipo-3.jpg', 1, 1, 21, 5000),
    new Equipo(4, 'Los Vengadores', 'assets/images/EscudosEquipos/EscudoEquipo-4.jpg', 2, 2, 25, 5000),
    new Equipo(5, 'Pizza Planeta', 'assets/images/EscudosEquipos/EscudoEquipo-5.jpg', 3, 1, 23, 5000),
    new Equipo(6, 'Nerazzurri', 'assets/images/EscudosEquipos/EscudoEquipo-6.jpg', 3, 2, 15, 5000),
    new Equipo(7, 'Camilion FC', 'assets/images/EscudosEquipos/EscudoEquipo-7.jpg', 4, 1, 20, 5000),
    new Equipo(8, 'La Vaca Mu', 'assets/images/EscudosEquipos/EscudoEquipo-8.jpg', 4, 2, 13, 5000),
    new Equipo(9, 'Las Chivas', 'assets/images/EscudosEquipos/EscudoEquipo-9.jpg', 5, 1, 23, 5000),
    new Equipo(10, 'Chintos Wings', 'assets/images/EscudosEquipos/EscudoEquipo-10.jpg', 5, 2, 3, 5000),
    new Equipo(11, 'FC Show', 'assets/images/EscudosEquipos/EscudoEquipo-11.jpg', 6, 1, 14, 5000),
    new Equipo(12, 'Mex United', 'assets/images/EscudosEquipos/EscudoEquipo-12.jpg', 6, 2, 6, 5000),
    new Equipo(13, 'Duendes', 'assets/images/EscudosEquipos/EscudoEquipo-13.jpg', 7, 1, 13, 5000),
    new Equipo(14, 'FC Santa Claus', 'assets/images/EscudosEquipos/EscudoEquipo-14.jpg', 7, 2, 15, 5000),
    new Equipo(15, 'Rosario Central', 'assets/images/EscudosEquipos/EscudoEquipo-15.jpg', 8, 1, 7, 5000),
    new Equipo(16, 'Gargolas', 'assets/images/EscudosEquipos/EscudoEquipo-16.jpg', 8, 2, 13, 5000),
    new Equipo(17, 'Leoncitos', 'assets/images/EscudosEquipos/EscudoEquipo-17.jpg', 9, 1, 18, 5000),
    new Equipo(18, 'Burros', 'assets/images/EscudosEquipos/EscudoEquipo-18.jpg', 9, 2, 18, 5000),
    new Equipo(19, 'URRS', 'assets/images/EscudosEquipos/EscudoEquipo-19.jpg', 10, 1, 24, 5000),
    new Equipo(20, 'Galacticos', 'assets/images/EscudosEquipos/EscudoEquipo-20.jpg', 10, 2, 10, 5000),
    new Equipo(21, 'La Mano de Dios', 'assets/images/EscudosEquipos/EscudoEquipo-21.jpg', 11, 1, 23, 5000),
    new Equipo(22, 'La Bocha', 'assets/images/EscudosEquipos/EscudoEquipo-22.jpg', 11, 2, 13, 5000),
    new Equipo(23, 'Club Sandwich', 'assets/images/EscudosEquipos/EscudoEquipo-23.jpg', 12, 1, 19, 5000),
    new Equipo(24, 'Jonas Brothers', 'assets/images/EscudosEquipos/EscudoEquipo-24.jpg', 12, 2, 17, 5000),
    new Equipo(25, 'Soccer Team', 'assets/images/EscudosEquipos/EscudoEquipo-25.jpg', 13, 1, 10, 5000),
    new Equipo(26, 'Hakuna Matata', 'assets/images/EscudosEquipos/EscudoEquipo-26.jpg', 13, 2, 17, 5000),
    new Equipo(27, 'Argentinos Junior', 'assets/images/EscudosEquipos/EscudoEquipo-27.jpg', 14, 1, 5, 5000),
    new Equipo(28, 'El Rebaño Sagrado', 'assets/images/EscudosEquipos/EscudoEquipo-28.jpg', 14, 2, 7, 5000),
    new Equipo(29, 'Rubentus', 'assets/images/EscudosEquipos/EscudoEquipo-29.jpg', 15, 1, 9, 5000),
    new Equipo(30, 'Club La Lora', 'assets/images/EscudosEquipos/EscudoEquipo-30.jpg', 15, 2, 8, 5000),
    new Equipo(31, 'Champiñon', 'assets/images/EscudosEquipos/EscudoEquipo-31.jpg', 16, 1, 26, 5000),
    new Equipo(32, 'El Holandes Volador', 'assets/images/EscudosEquipos/EscudoEquipo-32.jpg', 16, 2, 24, 5000),
    new Equipo(33, 'Hector Chavez', 'assets/images/EscudosEquipos/EscudoEquipo-33.jpg', 16, 1, 7, 5000),
    new Equipo(34, 'Canutos', 'assets/images/EscudosEquipos/EscudoEquipo-34.jpg', 17, 2, 20, 5000),
    new Equipo(35, 'Minions', 'assets/images/EscudosEquipos/EscudoEquipo-35.jpg', 18, 1, 14, 5000),
    new Equipo(36, 'La Santa Republica', 'assets/images/EscudosEquipos/EscudoEquipo-36.jpg', 18, 2, 16, 5000),
    new Equipo(37, 'Chapulines', 'assets/images/EscudosEquipos/EscudoEquipo-37.jpg', 19, 1, 16, 5000),
    new Equipo(38, 'Chavo del 8', 'assets/images/EscudosEquipos/EscudoEquipo-38.jpg', 19, 2, 13, 5000),
    new Equipo(39, 'Green Car', 'assets/images/EscudosEquipos/EscudoEquipo-39.jpg', 20, 1, 31, 5000),
    new Equipo(40, 'Kabin United', 'assets/images/EscudosEquipos/EscudoEquipo-40.jpg', 20, 2, 17, 5000),
  ];
  constructor() { }

  getEquipo(id): Equipo[] {
    return this.equipos.filter(equipo => (equipo.propietario == id));
  }
}
