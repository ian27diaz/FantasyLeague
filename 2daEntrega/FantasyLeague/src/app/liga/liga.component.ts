import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { LigaService } from './liga.service';
import { EquiposService } from '../mi-equipo/equipos.service';
import { Equipo } from '../mi-equipo/Equipo';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
              private router: Router, private ligaService: LigaService, private equiposService: EquiposService) { }

  ngOnInit() {
    if (!this.usuarioService.isUserLogged()) {
      this.router.navigate(['/authentication']);
    }
  }

}
