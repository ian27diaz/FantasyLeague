import { Component, OnInit } from '@angular/core';
import { EnfrentamientosService } from './enfrentamientos.service';
import { Enfrentamiento } from './enfrentamiento/Enfrentamiento';
import { EquiposService } from 'src/app/mi-equipo/equipos.service';
import { Equipo } from 'src/app/mi-equipo/Equipo';
import { PlantillaService } from 'src/app/mi-equipo/plantilla.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-enfrentamientos',
  templateUrl: './enfrentamientos.component.html',
  styleUrls: ['./enfrentamientos.component.css']
})
export class EnfrentamientosComponent implements OnInit {
  jornada = 1;
  equiposLiga: Equipo[];
  enfrentamientosJornada: Enfrentamiento[];
  constructor(private enfrentamientosService: EnfrentamientosService, private equiposService: EquiposService, private plantillaService: PlantillaService, private router: Router) { }

  ngOnInit() {
    this.equiposLiga = this.equiposService.getEquipoLiga();
  }

  actualizarJornada(jornadaSel){
    this.jornada = jornadaSel;
    this.enfrentamientosJornada = this.enfrentamientosService.getEnfrentamientoPorJornada(this.jornada, this.equiposLiga[0].liga);
    console.log(this.enfrentamientosJornada);
  }

  abrirEnfrentamiento(enfrentamientoID){
    console.log(enfrentamientoID);
    this.enfrentamientosService.setCurrentEnfrentamiento(enfrentamientoID);
    this.router.navigate(['/pruebaEnfrentamiento']);
  }

}
