import { Injectable } from '@angular/core';
import { Liga } from './Liga';
import { FutbolistasService } from '../futbolistas/futbolistas.service';
import { EquiposService } from '../mi-equipo/equipos.service';
import { PlantillaService } from '../mi-equipo/plantilla.service';

@Injectable({
  providedIn: 'root'
})
export class LigaService {
  futbolistas = this.futbolistas = this.futbolistasService.filterFutbolista('', '', '', '', 15, 50, 0, 500);

  pallaros = new Map();
  ligas: Liga[] = [
    new Liga(1, 'Liga DASW'),
    new Liga(2, 'Liga de la justicia')
  ];

  constructor(private futbolistasService: FutbolistasService,
              private equipoService: EquiposService, private plantillaService: PlantillaService) { }

  getLigas(): Liga[] {
    return this.ligas;
  }

  setPallaro() {
    for (let j = 0; j < this.futbolistas.length - 1; j++) {
      this.pallaros.set(this.futbolistas[j].id, this.equipoService.sinEquipo);
      for (let i = 0; i < this.plantillaService.plantillas.length - 1; i++) {
        if (!this.plantillaService.plantillas[i].activa ||
          !this.equipoService.getEquipoLiga().includes(this.equipoService.getEquipoByID(this.plantillaService.plantillas[i].equipo))) {
          break;
        }
        if (this.plantillaService.plantillas[i].titular1 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].titular2 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].titular3 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].titular4 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].titular5 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].titular6 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].titular7 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].titular8 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].titular9 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].titular10 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].titular11 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].banca1 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].banca2 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].banca3 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].reserva1 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].reserva2 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].reserva3 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].reserva4 == this.futbolistas[j].id ||
            this.plantillaService.plantillas[i].reserva5 == this.futbolistas[j].id) {
              this.pallaros.delete(this.futbolistas[j].id);
              this.pallaros.set(this.futbolistas[j].id, this.equipoService.getEquipoByID(this.plantillaService.plantillas[i].equipo));
        }
      }
    }
  }

}
