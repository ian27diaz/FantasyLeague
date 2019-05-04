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
        // public partidosGanados: number,
        // public partidosEmpatados: number,
        // public partidosPerdidos: number,
        // public puntosFavor: number,
        // public puntosContra: number,
        // public presupuesto: number

export class EquiposService {
  currentEquipo: Equipo;
  lastID: number = 1;
  sinEquipo =     new Equipo(0, 'Sin Propietario', 'assets/images/EscudosEquipos/EscudoEquipo-1.jpg', 0, 0, 0, 0, 0, 0, 0, 0);

  equipos: Equipo[] = [
    new Equipo(this.lastID++, 'Luis Fernando`s Team', 'assets/images/EscudosEquipos/EscudoEquipo-1.jpg', 1, 1, 10, 0, 0, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Pallacracks', 'assets/images/EscudosEquipos/EscudoEquipo-2.jpg', 1, 2, 10, 0, 0, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Mickey Mouse', 'assets/images/EscudosEquipos/EscudoEquipo-3.jpg', 1, 1, 9, 1, 0, 1900, 1100, 5000),
    new Equipo(this.lastID++, 'Los Vengadores', 'assets/images/EscudosEquipos/EscudoEquipo-4.jpg', 2, 2, 9, 1, 0, 1900, 1100, 5000),
    new Equipo(this.lastID++, 'Pizza Planeta', 'assets/images/EscudosEquipos/EscudoEquipo-5.jpg', 3, 1, 8, 1, 1, 1800, 1200, 5000),
    new Equipo(this.lastID++, 'Nerazzurri', 'assets/images/EscudosEquipos/EscudoEquipo-6.jpg', 3, 2, 8, 1, 1, 1800, 1200, 5000),
    new Equipo(this.lastID++, 'Camilion FC', 'assets/images/EscudosEquipos/EscudoEquipo-7.jpg', 4, 1, 8, 1, 1, 1700, 1200, 5000),
    new Equipo(this.lastID++, 'La Vaca Mu', 'assets/images/EscudosEquipos/EscudoEquipo-8.jpg', 4, 2, 8, 1, 1, 1700, 1200, 5000),
    new Equipo(this.lastID++, 'Las Chivas', 'assets/images/EscudosEquipos/EscudoEquipo-9.jpg', 5, 1, 7, 2, 1, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Chintos Wings', 'assets/images/EscudosEquipos/EscudoEquipo-10.jpg', 5, 2, 7, 2, 1, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'FC Show', 'assets/images/EscudosEquipos/EscudoEquipo-11.jpg', 6, 1, 6, 0, 4, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Mex United', 'assets/images/EscudosEquipos/EscudoEquipo-12.jpg', 6, 2, 6, 0, 4, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Duendes', 'assets/images/EscudosEquipos/EscudoEquipo-13.jpg', 7, 1, 6, 4, 0, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'FC Santa Claus', 'assets/images/EscudosEquipos/EscudoEquipo-14.jpg', 7, 2, 6, 1, 3, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Rosario Central', 'assets/images/EscudosEquipos/EscudoEquipo-15.jpg', 8, 1, 5, 0, 5, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Gargolas', 'assets/images/EscudosEquipos/EscudoEquipo-16.jpg', 8, 2, 5, 0, 5, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Leoncitos', 'assets/images/EscudosEquipos/EscudoEquipo-17.jpg', 9, 1, 5, 1, 4, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Burros', 'assets/images/EscudosEquipos/EscudoEquipo-18.jpg', 9, 2, 5, 1, 4, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'URRS', 'assets/images/EscudosEquipos/EscudoEquipo-19.jpg', 10, 1, 4, 5, 1, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Galacticos', 'assets/images/EscudosEquipos/EscudoEquipo-20.jpg', 10, 2, 4, 5, 1, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'La Mano de Dios', 'assets/images/EscudosEquipos/EscudoEquipo-21.jpg', 11, 1, 6, 2, 2, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'La Bocha', 'assets/images/EscudosEquipos/EscudoEquipo-22.jpg', 11, 2, 6, 2, 2, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Club Sandwich', 'assets/images/EscudosEquipos/EscudoEquipo-23.jpg', 12, 1, 3, 6, 1, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Jonas Brothers', 'assets/images/EscudosEquipos/EscudoEquipo-24.jpg', 12, 2, 3, 6, 1, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Soccer Team', 'assets/images/EscudosEquipos/EscudoEquipo-25.jpg', 13, 1, 4, 2, 4, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Hakuna Matata', 'assets/images/EscudosEquipos/EscudoEquipo-26.jpg', 13, 2, 4, 2, 4, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Argentinos Junior', 'assets/images/EscudosEquipos/EscudoEquipo-27.jpg', 14, 1, 3, 4, 3, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'El Rebaño Sagrado', 'assets/images/EscudosEquipos/EscudoEquipo-28.jpg', 14, 2, 3, 4, 3, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Rubentus', 'assets/images/EscudosEquipos/EscudoEquipo-29.jpg', 15, 1, 3, 3, 4, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Club La Lora', 'assets/images/EscudosEquipos/EscudoEquipo-30.jpg', 15, 2, 3, 3, 4, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Champiñon', 'assets/images/EscudosEquipos/EscudoEquipo-31.jpg', 16, 1, 2, 8, 0, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'El Holandes Volador', 'assets/images/EscudosEquipos/EscudoEquipo-32.jpg', 16, 2, 2, 8, 0, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Hector Chavez', 'assets/images/EscudosEquipos/EscudoEquipo-33.jpg', 16, 1, 4, 0, 6, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Canutos', 'assets/images/EscudosEquipos/EscudoEquipo-34.jpg', 15, 2, 4, 0, 6, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Minions', 'assets/images/EscudosEquipos/EscudoEquipo-35.jpg', 14, 1, 3, 4, 3, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'La Santa Republica', 'assets/images/EscudosEquipos/EscudoEquipo-36.jpg', 13, 2, 3, 4, 3, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Chapulines', 'assets/images/EscudosEquipos/EscudoEquipo-37.jpg', 12, 1, 1, 9, 0, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Chavo del 8', 'assets/images/EscudosEquipos/EscudoEquipo-38.jpg', 11, 2, 1, 9, 0, 2000, 1000, 5000),
    new Equipo(this.lastID++, 'Green Car', 'assets/images/EscudosEquipos/EscudoEquipo-39.jpg', 10, 1, 0, 0, 10, 1000, 2000, 5000),
    new Equipo(this.lastID++, 'Kabin United', 'assets/images/EscudosEquipos/EscudoEquipo-40.jpg', 9, 2, 1, 0, 9, 1000, 2000, 5000),
  ];
  constructor() { }

  crearEquipoNuevo(nombre: string, currentUser: number){
    let newTeam = new Equipo(this.lastID++,
      nombre,
      'assets/images/EscudosEquipos/EscudoEquipo-default.jpg', 
      currentUser,
      0,0,0,0,0,0,1_000_000);
    this.equipos.push(newTeam);
    this.currentEquipo = newTeam;
  }

  getEquipoPropietario(idPropietario): Equipo[] {
    return this.equipos.filter(equipo => (equipo.propietario == idPropietario));
  }

  getEquipoLiga(): Equipo[] {
    let equiposLiga = this.equipos.filter(equipo => (equipo.liga == this.currentEquipo.liga));
    equiposLiga.sort((a, b) => {
      if((a.partidosGanados*3 + a.partidosEmpatados) > (b.partidosGanados*3 + b.partidosEmpatados)) return -1;
      if((a.partidosGanados*3 + a.partidosEmpatados) < (b.partidosGanados*3 + b.partidosEmpatados)) return 1;
      if((a.puntosFavor - a.puntosContra) > (b.puntosFavor - b.puntosContra)) return -1;
      if((a.puntosFavor - a.puntosContra) < (b.puntosFavor - b.puntosContra)) return 1;
      return 1;
    });
    return equiposLiga;
  }

  getCurrentEquipo(): Equipo {
    return this.currentEquipo;
  }

  actualizarEquipo(equipo: Equipo) {
    this.currentEquipo = equipo;
  }

  getEquipoByID(id: number) {
    return this.equipos.find(equ => equ.id === id);
  }

  agregarEquipo(){
    
  }
}
