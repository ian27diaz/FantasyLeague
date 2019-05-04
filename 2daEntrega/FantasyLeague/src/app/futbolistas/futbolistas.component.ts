import { Component, OnInit } from '@angular/core';
import { Futbolista } from './futbolista/Futbolista';
import { FutbolistasService } from './futbolistas.service';
import { UsuarioService } from '../usuario.service';
import { Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PlantillaService } from '../mi-equipo/plantilla.service';
import { EquiposService } from '../mi-equipo/equipos.service';
import { LigaService } from '../liga/liga.service';
import { Plantilla } from '../mi-equipo/Plantilla';
import { Equipo } from '../mi-equipo/Equipo';

@Component({
  selector: 'app-futbolistas',
  templateUrl: './futbolistas.component.html',
  styleUrls: ['./futbolistas.component.css']
})
export class FutbolistasComponent implements OnInit {
  closeResult: string;
  pallaros = this.ligaService.pallaros;
  plantilla: Plantilla;
  equipo: Equipo;

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
              private modalService: NgbModal,
              private ligaService: LigaService) { }

  ngOnInit() {
    if(!this.usuarioService.isUserLogged()){
      this.router.navigate(['/authentication']);
    }
    this.propietarios = [];
    this.futbolistas = this.futbolistasService.filterFutbolista('', '', '', '', 15, 50, 0, 500);

    this.equipo = this.equipoService.getCurrentEquipo();
    this.plantilla = this.plantillaService.buscarPlantillaMiEquipo(this.equipo.id);
    this.ligaService.setPallaro();

    this.futbolistas.forEach((futbolista, index) => {
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
                if(futbolista.nombre == 'Reus') console.log("indeX: " + index);
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
    console.log('EnPropi: ' + indice + ' ' + this.propietarios[indice]);
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
  }

  submit() {
    this.futbolistas = this.futbolistasService.filterFutbolista(this.selectorNombre,
                                                                this.selectorCompeticion,
                                                                this.selectorClub,
                                                                this.selectorPosicion,
                                                                this.edadMin,
                                                                this.edadMax,
                                                                this.precioMin,
                                                                this.precioMax);
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

    venderFutbolista(id) {
      if (this.plantilla.capitan == id) {
        this.plantilla.capitan = -1;
      }
      if (this.plantilla.titular1 == id) {
        this.plantilla.titular1 = 0;
      } else if (this.plantilla.titular2 == id) {
        this.plantilla.titular2 = 0;
      } else if (this.plantilla.titular3 == id) {
        this.plantilla.titular3 = 0;
      } else if (this.plantilla.titular4 == id) {
        this.plantilla.titular4 = 0;
      } else if (this.plantilla.titular5 == id) {
        this.plantilla.titular5 = 0;
      } else if (this.plantilla.titular6 == id) {
        this.plantilla.titular6 = 0;
      } else if (this.plantilla.titular7 == id) {
        this.plantilla.titular7 = 0;
      } else if (this.plantilla.titular8 == id) {
        this.plantilla.titular8 = 0;
      } else if (this.plantilla.titular9 == id) {
        this.plantilla.titular9 = 0;
      } else if (this.plantilla.titular10 == id) {
        this.plantilla.titular10 = 0;
      } else if (this.plantilla.titular11 == id) {
        this.plantilla.titular11 = 0;
      } else if (this.plantilla.banca1 == id) {
        this.plantilla.banca1 = 0;
      } else if (this.plantilla.banca2 == id) {
        this.plantilla.banca2 = 0;
      } else if (this.plantilla.banca3 == id) {
        this.plantilla.banca3 = 0;
      } else if (this.plantilla.reserva1 == id) {
        this.plantilla.reserva1 = 0;
      } else if (this.plantilla.reserva2 == id) {
        this.plantilla.reserva2 = 0;
      } else if (this.plantilla.reserva3 == id) {
        this.plantilla.reserva3 = 0;
      } else if (this.plantilla.reserva4 == id) {
        this.plantilla.reserva4 = 0;
      } else if (this.plantilla.reserva5 == id) {
        this.plantilla.reserva5 = 0;
      }
      this.plantillaService.actualizarPlantillaJugador(this.plantilla);
      this.ligaService.setPallaro();
    }

    comprarFutbolista(id) {
      if (this.plantilla.titular1 == 0) {
        this.plantilla.titular1 = id;
      } else if (this.plantilla.titular2 == 0) {
        this.plantilla.titular2 = id;
      } else if (this.plantilla.titular3 == 0) {
        this.plantilla.titular3 = id;
      } else if (this.plantilla.titular4 == 0) {
        this.plantilla.titular4 = id;
      } else if (this.plantilla.titular5 == 0) {
        this.plantilla.titular5 = id;
      } else if (this.plantilla.titular6 == 0) {
        this.plantilla.titular6 = id;
      } else if (this.plantilla.titular7 == 0) {
        this.plantilla.titular7 = id;
      } else if (this.plantilla.titular8 == 0) {
        this.plantilla.titular8 = id;
      } else if (this.plantilla.titular9 == 0) {
        this.plantilla.titular9 = id;
      } else if (this.plantilla.titular10 == 0) {
        this.plantilla.titular10 = id;
      } else if (this.plantilla.titular11 == 0) {
        this.plantilla.titular11 = id;
      } else if (this.plantilla.banca1 == 0) {
        this.plantilla.banca1 = id;
      } else if (this.plantilla.banca2 == 0) {
        this.plantilla.banca2 = id;
      } else if (this.plantilla.banca3 == 0) {
        this.plantilla.banca3 = id;
      } else if (this.plantilla.reserva1 == 0) {
        this.plantilla.reserva1 = id;
      } else if (this.plantilla.reserva2 == 0) {
        this.plantilla.reserva2 = id;
      } else if (this.plantilla.reserva3 == 0) {
        this.plantilla.reserva3 = id;
      } else if (this.plantilla.reserva4 == 0) {
        this.plantilla.reserva4 = id;
      } else if (this.plantilla.reserva5 == 0) {
        this.plantilla.reserva5 = id;
      }
      this.plantillaService.actualizarPlantillaJugador(this.plantilla);
      this.ligaService.setPallaro();
    }

    getRandomNumber() {
      return Math.floor((Math.random() * 100));
    }
}
