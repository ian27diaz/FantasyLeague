import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { EquiposService } from './equipos.service';
import { Equipo } from './Equipo';
import { PlantillaService } from './plantilla.service';
import { Plantilla } from './Plantilla';


@Component({
  selector: 'app-mi-equipo',
  templateUrl: './mi-equipo.component.html',
  styleUrls: ['./mi-equipo.component.css']
})
export class MiEquipoComponent implements OnInit {
  currentEquipo: Equipo;
  constructor(private usuarioService: UsuarioService,

              private plantillaService: PlantillaService,
              private equiposService: EquiposService,
              private router: Router) { }

  currentFormation: Plantilla;

  ngOnInit() {
    if (!this.usuarioService.isUserLogged()) {
      this.router.navigate(['/authentication']);
    }
    this.currentEquipo = this.equipoService.getCurrentEquipo();
    this.currentFormation = this.plantillaService.buscarPlantillaMiEquipo(this.currentEquipo.id);
    console.log(this.currentFormation.formacion);
  }

}
