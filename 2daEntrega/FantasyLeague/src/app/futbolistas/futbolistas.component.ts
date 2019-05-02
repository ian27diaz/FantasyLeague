import { Component, OnInit } from '@angular/core';
import { Futbolista } from './futbolista/Futbolista';
import { FutbolistasService } from './futbolistas.service';
import { UsuarioService } from '../usuario.service';
import { Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PlantillaService } from '../mi-equipo/plantilla.service';
import { EquiposService } from '../mi-equipo/equipos.service';

@Component({
  selector: 'app-futbolistas',
  templateUrl: './futbolistas.component.html',
  styleUrls: ['./futbolistas.component.css']
})
export class FutbolistasComponent implements OnInit {
  closeResult: string;

  futbolistas: Futbolista[];
  propietarios: string[];
  p: number = 1;
  selectorNombre = '';
  selectorCompeticion = '';
  selectorClub = '';
  selectorPosicion = '';
  edadMin = 15;
  edadMax = 50;
  precioMin = 0;
  precioMax = 500;
  futbolistaInModal: Futbolista;
  constructor(private futbolistasService: FutbolistasService,
              private usuarioService: UsuarioService,
              private plantillaService: PlantillaService,
              private equipoService: EquiposService,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {
    if(!this.usuarioService.isUserLogged()){
      this.router.navigate(['/authentication']);
    }
    this.propietarios = [];
    this.futbolistas = this.futbolistasService.getFutbolista();

    this.futbolistas.forEach(futbolista => {
      let propietariosAux = '[';
      for(let i = 0; i < this.plantillaService.plantillas.length; i++){
        if (!this.plantillaService.plantillas[i].activa) {
          break;
        }
        if (this.plantillaService.plantillas[i].titular1 === futbolista.id ||
        this.plantillaService.plantillas[i].titular2 === futbolista.id ||
        this.plantillaService.plantillas[i].titular3 === futbolista.id ||
        this.plantillaService.plantillas[i].titular4 === futbolista.id ||
        this.plantillaService.plantillas[i].titular5 === futbolista.id ||
        this.plantillaService.plantillas[i].titular6 === futbolista.id ||
        this.plantillaService.plantillas[i].titular7 === futbolista.id ||
        this.plantillaService.plantillas[i].titular8 === futbolista.id ||
        this.plantillaService.plantillas[i].titular9 === futbolista.id ||
        this.plantillaService.plantillas[i].titular10 === futbolista.id ||
        this.plantillaService.plantillas[i].titular11 === futbolista.id ||
        this.plantillaService.plantillas[i].banca1 === futbolista.id ||
        this.plantillaService.plantillas[i].banca2 === futbolista.id ||
        this.plantillaService.plantillas[i].banca3 === futbolista.id ||
        this.plantillaService.plantillas[i].reserva1 === futbolista.id ||
        this.plantillaService.plantillas[i].reserva2 === futbolista.id ||
        this.plantillaService.plantillas[i].reserva3 === futbolista.id ||
        this.plantillaService.plantillas[i].reserva4 === futbolista.id ||
        this.plantillaService.plantillas[i].reserva5 === futbolista.id) {
          const idEquipo = this.plantillaService.plantillas[i].equipo;
          const equipo = this.equipoService.getEquipoByID(idEquipo);

          if (!propietariosAux.includes(equipo.nombre) && this.equipoService.getCurrentEquipo() !== undefined
              && this.equipoService.getCurrentEquipo().liga == equipo.liga) {
            propietariosAux += equipo.nombre + ', ';

          }
        }
      }
      if(propietariosAux.length > 2) {
        propietariosAux = propietariosAux.substr(0, propietariosAux.length - 2);
      }
      propietariosAux += ']';
      this.propietarios.push(propietariosAux);
      propietariosAux = '';
    });

  }

  getPropietarios(indice: number){
    return this.propietarios[indice];
  }

  cambiarCompeticion(selCompeticion) {
    this.selectorCompeticion = selCompeticion;
    console.log(this.selectorCompeticion);
  }
  cambiarClub(selClub) {
    this.selectorClub = selClub;
    console.log(this.selectorClub);
  }
  cambiarPosicion(selPos) {
    this.selectorPosicion = selPos;
    console.log(this.selectorPosicion);
  }

  EstablecerEdadMinima(edad) {
    this.edadMin = edad;
    console.log(this.edadMin);
  }
  EstablecerEdadMaxima(edad) {
    this.edadMax = edad;
  }
  EstablecerPrecioMinimo(precio) {
    this.precioMin = precio;
  }
  EstablecerPrecioMaximo(precio) {
    this.precioMax = precio;
  }

  CambiarNombre(nombre) {
    this.selectorNombre = nombre;
    console.log(this.selectorNombre);
  }

  submit() {
    this.futbolistas = this.futbolistasService.filterFutbolista(this.selectorNombre, this.selectorCompeticion, this.selectorClub, this.selectorPosicion, this.edadMin, this.edadMax, this.precioMin, this.precioMax);
    }


    open(content: any, fut: Futbolista) {
      this.futbolistaInModal = fut;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', windowClass: 'my-class'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

}
