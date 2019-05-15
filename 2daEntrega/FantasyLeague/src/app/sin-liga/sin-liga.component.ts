import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { EquiposService } from '../mi-equipo/equipos.service';
import { NgForm } from '@angular/forms';
import { LigaService } from '../liga/liga.service';
import { Equipo } from '../mi-equipo/Equipo';

@Component({
  selector: 'app-sin-liga',
  templateUrl: './sin-liga.component.html',
  styleUrls: ['./sin-liga.component.css']
})
export class SinLigaComponent implements OnInit {
  currentEquipo: Equipo;
  noPertenece: boolean;

  constructor(private usuarioService: UsuarioService, private router: Router, private equipoService: EquiposService, private ligaService: LigaService) { }

  ngOnInit() {
    if (!this.usuarioService.isUserLogged()) {
      this.router.navigate(['/authentication']);
    }
    this.currentEquipo = this.equipoService.getCurrentEquipo();
    this.noPertenece = (this.currentEquipo.liga == 0);
  }

  unirseLiga(codigo:NgForm) {
     let id = parseInt(codigo.value.Codigo);
     this.ligaService.unirEquipo(id);
     this.router.navigate(['/miequipo']);
   }

   crearLiga(nombre:NgForm) {
    this.ligaService.crearLiga(nombre.value.Nombre);
    this.router.navigate(['/miequipo']);
  }

}
