import { Component, OnInit } from '@angular/core';
import { EnfrentamientosService } from '../enfrentamientos.service';
import { Enfrentamiento } from './Enfrentamiento';
import { UsuarioService } from 'src/app/usuario.service';
import { Router } from '@angular/router';
import { EquiposService } from 'src/app/mi-equipo/equipos.service';
import { Futbolista } from 'src/app/futbolistas/futbolista/Futbolista';
import { Equipo } from 'src/app/mi-equipo/Equipo';
import { PlantillaService } from 'src/app/mi-equipo/plantilla.service';
import { FutbolistasService } from 'src/app/futbolistas/futbolistas.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-enfrentamiento',
  templateUrl: './enfrentamiento.component.html',
  styleUrls: ['./enfrentamiento.component.css']
})
export class EnfrentamientoComponent implements OnInit {
  selLocaloVisita= true;
  currentEnfrentamiento: Enfrentamiento;
  subscriptEnfrentamiento: Subscription;
  LocalcurrentEquipo: Equipo;
  LocalcurrentFormation;
  Localis3_4_3 = false;
  Localis3_5_2 = false;
  Localis4_3_3 = false;
  Localis4_4_2 = false;
  Localis4_5_1 = false;
  Localis5_3_2 = false;
  Localis5_4_1 = false;
  Localtitular1: Futbolista; //portero
  Localtitular2: Futbolista;
  Localtitular3: Futbolista;
  Localtitular4: Futbolista;
  Localtitular5: Futbolista;
  Localtitular6: Futbolista;
  Localtitular7: Futbolista;
  Localtitular8: Futbolista;
  Localtitular9: Futbolista;
  Localtitular10: Futbolista;
  Localtitular11: Futbolista;
  Localbanca1: Futbolista;
  Localbanca2: Futbolista;
  Localbanca3: Futbolista;

  VisitacurrentEquipo: Equipo;
  VisitacurrentFormation;
  Visitais3_4_3 = false;
  Visitais3_5_2 = false;
  Visitais4_3_3 = false;
  Visitais4_4_2 = false;
  Visitais4_5_1 = false;
  Visitais5_3_2 = false;
  Visitais5_4_1 = false;
  Visitatitular1: Futbolista; //portero
  Visitatitular2: Futbolista;
  Visitatitular3: Futbolista;
  Visitatitular4: Futbolista;
  Visitatitular5: Futbolista;
  Visitatitular6: Futbolista;
  Visitatitular7: Futbolista;
  Visitatitular8: Futbolista;
  Visitatitular9: Futbolista;
  Visitatitular10: Futbolista;
  Visitatitular11: Futbolista;
  Visitabanca1: Futbolista;
  Visitabanca2: Futbolista;
  Visitabanca3: Futbolista;

  constructor(private enfrentamientosService: EnfrentamientosService, 
              private usuarioService: UsuarioService, 
              private router: Router, 
              private equiposService: EquiposService,
              private plantillaService: PlantillaService,
              private futbolistaService: FutbolistasService) { }

  ngOnInit() {
    console.log('OninitEnfrentamiento')
    if (!this.usuarioService.isUserLogged()) {
      this.router.navigate(['/authentication']);
    }
    this.subscriptEnfrentamiento = this.enfrentamientosService.enfrentamientoSubject.subscribe(enfrentamientoInfo=>{
      console.log('get');
      console.log(enfrentamientoInfo);
      this.currentEnfrentamiento = enfrentamientoInfo;
      console.log(this.currentEnfrentamiento); 
    });

    this.LocalcurrentEquipo = this.equiposService.getEquipoByID(this.currentEnfrentamiento.local);
    this.LocalcurrentFormation = this.plantillaService.buscarPlantillaID(this.currentEnfrentamiento.plantillaLocal);
    this.Localtitular1 = this.futbolistaService.getFutbolistaByID(this.LocalcurrentFormation.titular1);
    this.Localtitular2 = this.futbolistaService.getFutbolistaByID(this.LocalcurrentFormation.titular2);
    this.Localtitular3 = this.futbolistaService.getFutbolistaByID(this.LocalcurrentFormation.titular3);
    this.Localtitular4 = this.futbolistaService.getFutbolistaByID(this.LocalcurrentFormation.titular4);
    this.Localtitular5 = this.futbolistaService.getFutbolistaByID(this.LocalcurrentFormation.titular5);
    this.Localtitular6 = this.futbolistaService.getFutbolistaByID(this.LocalcurrentFormation.titular6);
    this.Localtitular7 = this.futbolistaService.getFutbolistaByID(this.LocalcurrentFormation.titular7);
    this.Localtitular8 = this.futbolistaService.getFutbolistaByID(this.LocalcurrentFormation.titular8);
    this.Localtitular9 = this.futbolistaService.getFutbolistaByID(this.LocalcurrentFormation.titular9);
    this.Localtitular10 = this.futbolistaService.getFutbolistaByID(this.LocalcurrentFormation.titular10);
    this.Localtitular11 = this.futbolistaService.getFutbolistaByID(this.LocalcurrentFormation.titular11);
    this.Localbanca1 = this.futbolistaService.getFutbolistaByID(this.LocalcurrentFormation.banca1);
    this.Localbanca2 = this.futbolistaService.getFutbolistaByID(this.LocalcurrentFormation.banca2);
    this.Localbanca3 = this.futbolistaService.getFutbolistaByID(this.LocalcurrentFormation.banca3);

    switch (this.LocalcurrentFormation.formacion) {
      case '3-4-3':
        this.Localis3_4_3 = true;
        break;
      case '3-5-2':
        this.Localis3_5_2 = true;
        break;
      case '4-3-3':
        this.Localis4_3_3 = true;
        break;
      case '4-4-2':
        this.Localis4_4_2 = true;
        break;
      case '4-5-1':
        this.Localis4_5_1 = true;
        break;
      case '5-3-2':
        this.Localis5_3_2 = true;
        break;
      case '5-4-1':
        this.Localis5_4_1 = true;
        break;
      default: break;
    }

    this.VisitacurrentEquipo = this.equiposService.getEquipoByID(this.currentEnfrentamiento.visita);
    this.VisitacurrentFormation = this.plantillaService.buscarPlantillaID(this.currentEnfrentamiento.plantillaVisita);
    this.Visitatitular1 = this.futbolistaService.getFutbolistaByID(this.VisitacurrentFormation.titular1);
    this.Visitatitular2 = this.futbolistaService.getFutbolistaByID(this.VisitacurrentFormation.titular2);
    this.Visitatitular3 = this.futbolistaService.getFutbolistaByID(this.VisitacurrentFormation.titular3);
    this.Visitatitular4 = this.futbolistaService.getFutbolistaByID(this.VisitacurrentFormation.titular4);
    this.Visitatitular5 = this.futbolistaService.getFutbolistaByID(this.VisitacurrentFormation.titular5);
    this.Visitatitular6 = this.futbolistaService.getFutbolistaByID(this.VisitacurrentFormation.titular6);
    this.Visitatitular7 = this.futbolistaService.getFutbolistaByID(this.VisitacurrentFormation.titular7);
    this.Visitatitular8 = this.futbolistaService.getFutbolistaByID(this.VisitacurrentFormation.titular8);
    this.Visitatitular9 = this.futbolistaService.getFutbolistaByID(this.VisitacurrentFormation.titular9);
    this.Visitatitular10 = this.futbolistaService.getFutbolistaByID(this.VisitacurrentFormation.titular10);
    this.Visitatitular11 = this.futbolistaService.getFutbolistaByID(this.VisitacurrentFormation.titular11);
    this.Visitabanca1 = this.futbolistaService.getFutbolistaByID(this.VisitacurrentFormation.banca1);
    this.Visitabanca2 = this.futbolistaService.getFutbolistaByID(this.VisitacurrentFormation.banca2);
    this.Visitabanca3 = this.futbolistaService.getFutbolistaByID(this.VisitacurrentFormation.banca3);

    switch (this.VisitacurrentFormation.formacion) {
      case '3-4-3':
        this.Visitais3_4_3 = true;
        break;
      case '3-5-2':
        this.Visitais3_5_2 = true;
        break;
      case '4-3-3':
        this.Visitais4_3_3 = true;
        break;
      case '4-4-2':
        this.Visitais4_4_2 = true;
        break;
      case '4-5-1':
        this.Visitais4_5_1 = true;
        break;
      case '5-3-2':
        this.Visitais5_3_2 = true;
        break;
      case '5-4-1':
        this.Visitais5_4_1 = true;
        break;
      default: break;
    }
  }

  mostrarLocaloVisita(sel){
    this.selLocaloVisita = sel;
    console.log(this.selLocaloVisita);
  }

}
