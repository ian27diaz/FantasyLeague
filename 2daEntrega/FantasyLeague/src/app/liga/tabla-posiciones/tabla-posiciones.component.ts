import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/mi-equipo/Equipo';
import { EquiposService } from 'src/app/mi-equipo/equipos.service';

@Component({
  selector: 'app-tabla-posiciones',
  templateUrl: './tabla-posiciones.component.html',
  styleUrls: ['./tabla-posiciones.component.css']
})
export class TablaPosicionesComponent implements OnInit {
  equiposLiga: Equipo[];
  constructor(private equiposService: EquiposService) { }

  ngOnInit() {
    this.equiposLiga = this.equiposService.getEquipoLiga();
    console.log(this.equiposLiga);  
  }
}
