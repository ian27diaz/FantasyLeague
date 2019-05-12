import { Component, OnInit } from '@angular/core';
import { EnfrentamientosService } from './enfrentamientos.service';
import { Enfrentamiento } from './enfrentamiento/Enfrentamiento';
import { EquiposService } from 'src/app/mi-equipo/equipos.service';
import { Equipo } from 'src/app/mi-equipo/Equipo';
import { PlantillaService } from 'src/app/mi-equipo/plantilla.service';


@Component({
  selector: 'app-enfrentamientos',
  templateUrl: './enfrentamientos.component.html',
  styleUrls: ['./enfrentamientos.component.css']
})
export class EnfrentamientosComponent implements OnInit {
  jornada = 1;
  equiposLiga: Equipo[];
  enfrentamientosJornada: Enfrentamiento[];
  constructor(private enfrentamientosService: EnfrentamientosService, private equiposService: EquiposService, private plantillaService: PlantillaService) { }

  ngOnInit() {
   
  }

  actualizarJornada(jornadaSel){
    this.jornada = jornadaSel;
    this.enfrentamientosJornada = this.enfrentamientosService.getEnfrentamientoPorJornada(this.jornada, 1);
  
  }

}
