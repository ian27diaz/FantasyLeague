import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { EquiposService } from './equipos.service';
import { Equipo } from './Equipo';

@Component({
  selector: 'app-mi-equipo',
  templateUrl: './mi-equipo.component.html',
  styleUrls: ['./mi-equipo.component.css']
})
export class MiEquipoComponent implements OnInit {
  currentEquipo: Equipo;
  constructor(private usuarioService: UsuarioService,
    private router: Router, private equiposService: EquiposService) { }

  ngOnInit() {
    if (!this.usuarioService.isUserLogged()) {
      this.router.navigate(['/authentication']);
    }
    this.currentEquipo = this.equiposService.getCurrentEquipo();
  }
}
