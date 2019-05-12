export class Enfrentamiento {

    constructor(
        public id: number,
        public liga: number,
        public jornada: number,
        public local: number,
        public visita: number,
        public plantillaLocal: number,
        public plantillaVisita: number,
        public puntosLocal: number,
        public puntosVisita: number
        ) {}
}
