export class Equipo {

    constructor(
        public id: number,
        public nombre: string,
        public escudo: string,
        public propietario: number,
        public liga: number,
        public partidosGanados: number,
        public partidosEmpatados: number,
        public partidosPerdidos: number,
        public puntosFavor: number,
        public puntosContra: number,
        public presupuesto: number
        ) {}
}
