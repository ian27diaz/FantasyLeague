import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { EquiposService } from './equipos.service';
import { Equipo } from './Equipo';
import { PlantillaService } from './plantilla.service';
import { Plantilla } from './Plantilla';
import { Futbolista } from '../futbolistas/futbolista/Futbolista';
import { FutbolistasService } from '../futbolistas/futbolistas.service';
import { EnfrentamientosService } from '../Liga/enfrentamientos/enfrentamientos.service';
import { LigaService } from '../liga/liga.service';

@Component({
  selector: 'app-mi-equipo',
  templateUrl: './mi-equipo.component.html',
  styleUrls: ['./mi-equipo.component.css']
})

export class MiEquipoComponent implements OnInit {
  currentEquipo: Equipo;
  constructor(private usuarioService: UsuarioService,

    private enfrentamientosService: EnfrentamientosService,
    private plantillaService: PlantillaService,
    private equipoService: EquiposService,
    private futbolistaService: FutbolistasService,
    private router: Router,
    private ligaService: LigaService) { }

  currentFormation: Plantilla;
  is3_4_3 = false;
  is3_5_2 = false;
  is4_3_3 = false;
  is4_4_2 = false;
  is4_5_1 = false;
  is5_3_2 = false;
  is5_4_1 = false;
  titular1: Futbolista; //portero
  titular2: Futbolista;
  titular3: Futbolista;
  titular4: Futbolista;
  titular5: Futbolista;
  titular6: Futbolista;
  titular7: Futbolista;
  titular8: Futbolista;
  titular9: Futbolista;
  titular10: Futbolista;
  titular11: Futbolista;
  banca1: Futbolista;
  banca2: Futbolista;
  banca3: Futbolista;
  ngOnInit() {
    if (!this.usuarioService.isUserLogged()) {
      this.router.navigate(['/authentication']);
    }

    this.currentEquipo = this.equipoService.getCurrentEquipo();

    if (this.currentEquipo.liga == 0) {
      this.router.navigate(['/sinliga']);
    }

    if (this.ligaService.getLigaByID(this.currentEquipo.liga).integrantes < 20) {
      this.router.navigate(['/sinliga']);
    }

    this.currentFormation = this.plantillaService.buscarPlantillaMiEquipo(this.currentEquipo.id);
    this.titular1 = this.futbolistaService.getFutbolistaByID(this.currentFormation.titular1);
    this.titular2 = this.futbolistaService.getFutbolistaByID(this.currentFormation.titular2);
    this.titular3 = this.futbolistaService.getFutbolistaByID(this.currentFormation.titular3);
    this.titular4 = this.futbolistaService.getFutbolistaByID(this.currentFormation.titular4);
    this.titular5 = this.futbolistaService.getFutbolistaByID(this.currentFormation.titular5);
    this.titular6 = this.futbolistaService.getFutbolistaByID(this.currentFormation.titular6);
    this.titular7 = this.futbolistaService.getFutbolistaByID(this.currentFormation.titular7);
    this.titular8 = this.futbolistaService.getFutbolistaByID(this.currentFormation.titular8);
    this.titular9 = this.futbolistaService.getFutbolistaByID(this.currentFormation.titular9);
    this.titular10 = this.futbolistaService.getFutbolistaByID(this.currentFormation.titular10);
    this.titular11 = this.futbolistaService.getFutbolistaByID(this.currentFormation.titular11);
    this.banca1 = this.futbolistaService.getFutbolistaByID(this.currentFormation.banca1);
    this.banca2 = this.futbolistaService.getFutbolistaByID(this.currentFormation.banca2);
    this.banca3 = this.futbolistaService.getFutbolistaByID(this.currentFormation.banca3);

    switch (this.currentFormation.formacion) {
      case '3-4-3':
        this.is3_4_3 = true;
        break;
      case '3-5-2':
        this.is3_5_2 = true;
        break;
      case '4-3-3':
        this.is4_3_3 = true;
        break;
      case '4-4-2':
        this.is4_4_2 = true;
        break;
      case '4-5-1':
        this.is4_5_1 = true;
        break;
      case '5-3-2':
        this.is5_3_2 = true;
        break;
      case '5-4-1':
        this.is5_4_1 = true;
        break;
      default: break;
    }
  }

  changeFormation(formation: string) {
    this.is3_4_3 = this.is3_5_2 = this.is4_3_3 = this.is4_4_2 = this.is4_5_1 = this.is5_3_2 = this.is5_4_1 = false;
    //TODO: Cambiar la currentFormation, y cambiar la formacion de PlantillaService
    this.currentFormation.formacion = formation;
    this.plantillaService.actualizarFormacionMiEquipo(this.currentFormation.id, formation);
    switch (this.currentFormation.formacion) {
      case '3-4-3':
        this.is3_4_3 = true;
        break;
      case '3-5-2':
        this.is3_5_2 = true;
        break;
      case '4-3-3':
        this.is4_3_3 = true;
        break;
      case '4-4-2':
        this.is4_4_2 = true;
        break;
      case '4-5-1':
        this.is4_5_1 = true;
        break;
      case '5-3-2':
        this.is5_3_2 = true;
        break;
      case '5-4-1':
        this.is5_4_1 = true;
        break;
      default: break;
    }
  }
}
