export class Equipo {

    constructor(
        public id: number,
        public nombre: string,
        public escudo: string,
        public propietario: number,
        public liga: number,
        public puntos: number,
        public plantilla: number,
        public presupuesto: number
        ) {}
}
