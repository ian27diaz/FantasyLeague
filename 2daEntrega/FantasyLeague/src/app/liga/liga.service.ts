import { Injectable } from '@angular/core';
import { Liga } from './Liga';
import { FutbolistasService } from '../futbolistas/futbolistas.service';
import { EquiposService } from '../mi-equipo/equipos.service';
import { PlantillaService } from '../mi-equipo/plantilla.service';
import { EnfrentamientosService } from './enfrentamientos/enfrentamientos.service';
import { Equipo } from '../mi-equipo/Equipo';

@Injectable({
  providedIn: 'root'
})
export class LigaService {
  futbolistas = this.futbolistas = this.futbolistasService.filterFutbolista('', '', '', '', 15, 50, 0, 500);
  lastID = 0;
  equiposLiga: Equipo[];

  pallaros = new Map();
  ligas: Liga[] = [
    new Liga(this.lastID++, 'Liga Default', 0),
    new Liga(this.lastID++, 'Liga DASW', 20),
    new Liga(this.lastID++, 'Liga de la justicia', 19)
  ];

  constructor(private futbolistasService: FutbolistasService,
              private equiposService: EquiposService, private plantillaService: PlantillaService, private enfrentamientosService: EnfrentamientosService) { }

  getLigas(): Liga[] {
    return this.ligas;
  }

  setPallaro() {
    for (let j = 0; j < this.futbolistas.length - 1; j++) {
      this.pallaros.set(this.futbolistas[j].id, this.equiposService.sinEquipo);
      for (let i = 0; i < this.plantillaService.plantillas.length - 1; i++) {
        if (!this.plantillaService.plantillas[i].activa ||
          !this.equiposService.getEquipoLiga().includes(this.equiposService.getEquipoByID(this.plantillaService.plantillas[i].equipo))) {
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
              this.pallaros.set(this.futbolistas[j].id, this.equiposService.getEquipoByID(this.plantillaService.plantillas[i].equipo));
        }
      }
    }
  }

  getLigaByID(IDliga): Liga{
    return this.ligas.find(l => l.id == IDliga)
  }

  crearLiga(nombre) {
     this.ligas.push(new Liga(this.lastID, nombre, 1));
     this.equiposService.agregarEquipoALiga(this.lastID++);
  }

  unirEquipo(IDliga) {
    if (this.ligas.find(l => l.id == IDliga).integrantes < 20) {
      this.ligas.find(l => l.id == IDliga).integrantes++;
      this.equiposService.agregarEquipoALiga(IDliga);

      if (this.ligas.find(l => l.id == IDliga).integrantes == 20){
        this.equiposLiga = this.equiposService.getEquipoLiga();
        for(let i = 0; i<this.equiposLiga.length; i++){
            this.plantillaService.crearPlantillasNuevas(this.equiposLiga[i].id);
        }
        this.enfrentamientosService.crearEnfrentamientosLiga(IDliga, this.equiposLiga);
      }

    }else{
      console.log('La liga ya esta completa');
    }
  }

}
