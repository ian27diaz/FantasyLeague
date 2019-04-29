import { Component, OnInit } from '@angular/core';
import { Equipo } from '../mi-equipo/Equipo';
import { EquiposService } from '../mi-equipo/equipos.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  equipos: Equipo[];
  constructor(private equiposService: EquiposService) { }

  ngOnInit() {
    this.equipos = this.equiposService.getEquipo();
  }

}
