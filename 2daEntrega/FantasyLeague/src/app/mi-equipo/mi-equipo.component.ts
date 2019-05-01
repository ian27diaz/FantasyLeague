import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { EquiposService } from './equipos.service';
import { Equipo } from './Equipo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mi-equipo',
  templateUrl: './mi-equipo.component.html',
  styleUrls: ['./mi-equipo.component.css']
})
export class MiEquipoComponent implements OnInit {
  currentEquipo: Equipo;
  equipoSuscript: Subscription;
  constructor(private usuarioService: UsuarioService,
    private router: Router, private equiposService: EquiposService) { }

  ngOnInit() {
    if(!this.usuarioService.isUserLogged()){
      this.router.navigate(['/authentication']);
    }
    this.equipoSuscript = this.equiposService.currentEquipo
      .subscribe((equ: Equipo) => {
        this.currentEquipo = equ;
        console.log(this.currentEquipo);
        console.log('hola');
      })
  }
}
