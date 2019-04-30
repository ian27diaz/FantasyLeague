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
  infoLiga = 1;
  infoRubro = 1;
  activeTabla = 'nav-item active';
  activeEnfrentamientos = 'nav-item';
  activeEstadisticas = 'nav-item';

  constructor(private equiposService: EquiposService) { }

  ngOnInit() {
    this.equipos = this.equiposService.getEquipo();
  }

  cambiarInfoLiga(ligaSel) {
    this.infoLiga = ligaSel;
  }

  cambiarInfoRubro(rubroSel) {
    this.infoRubro = rubroSel;
    switch (rubroSel) {
      case 1:
        this.activeTabla = 'nav-item active';
        this.activeEnfrentamientos = 'nav-item';
        this.activeEstadisticas = 'nav-item';
        break;
      case 2:
        this.activeTabla = 'nav-item';
        this.activeEnfrentamientos = 'nav-item active';
        this.activeEstadisticas = 'nav-item';
        break;
      case 3:
        this.activeTabla = 'nav-item';
        this.activeEnfrentamientos = 'nav-item';
        this.activeEstadisticas = 'nav-item active';
        break;
    }
  }

}
