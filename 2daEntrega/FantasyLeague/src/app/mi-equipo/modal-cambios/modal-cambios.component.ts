import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Futbolista } from 'src/app/futbolistas/futbolista/Futbolista';
import { Plantilla } from '../Plantilla';
import { PlantillaService } from '../plantilla.service';
import { EquiposService } from '../equipos.service';
import { Equipo } from '../Equipo';
import { FutbolistasService } from 'src/app/futbolistas/futbolistas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-cambios',
  templateUrl: './modal-cambios.component.html',
  styleUrls: ['./modal-cambios.component.css']
})
export class ModalCambiosComponent implements OnInit {
  closeResult: string;
  plantilla: Plantilla;
  equipo: Equipo;
  futbolistaSale: Futbolista;
  futbolistaEntra: Futbolista;

  titular1: Futbolista;
  titular2: Futbolista;
  titular3: Futbolista;
  titular4: Futbolista;
  titular5: Futbolista;
  titular6: Futbolista;
  titular7: Futbolista;
  titular8: Futbolista;
  titular9: Futbolista;
  titular10: Futbolista;
  titular11: Futbolista;
  banca1: Futbolista;
  banca2: Futbolista;
  banca3: Futbolista;
  reserva1: Futbolista;
  reserva2: Futbolista;
  reserva3: Futbolista;
  reserva4: Futbolista;
  reserva5: Futbolista;
  capitan: Futbolista;


  constructor(private modalService: NgbModal, private plantillaService: PlantillaService,
    private equipoService: EquiposService, private futbolistaService: FutbolistasService, private router: Router) { }

  ngOnInit() {
    this.futbolistaEntra = this.futbolistaService.getFutbolistaByID(0);
    this.futbolistaSale = this.futbolistaService.getFutbolistaByID(0);
    this.equipo = this.equipoService.getCurrentEquipo();
    this.plantilla = this.plantillaService.buscarPlantillaMiEquipo(this.equipo.id);
    this.capitan = this.futbolistaService.getFutbolistaByID(this.plantilla.capitan);
    this.titular1 = this.futbolistaService.getFutbolistaByID(this.plantilla.titular1);
    this.titular2 = this.futbolistaService.getFutbolistaByID(this.plantilla.titular2);
    this.titular3 = this.futbolistaService.getFutbolistaByID(this.plantilla.titular3);
    this.titular4 = this.futbolistaService.getFutbolistaByID(this.plantilla.titular4);
    this.titular5 = this.futbolistaService.getFutbolistaByID(this.plantilla.titular5);
    this.titular6 = this.futbolistaService.getFutbolistaByID(this.plantilla.titular6);
    this.titular7 = this.futbolistaService.getFutbolistaByID(this.plantilla.titular7);
    this.titular8 = this.futbolistaService.getFutbolistaByID(this.plantilla.titular8);
    this.titular9 = this.futbolistaService.getFutbolistaByID(this.plantilla.titular9);
    this.titular10 = this.futbolistaService.getFutbolistaByID(this.plantilla.titular10);
    this.titular11 = this.futbolistaService.getFutbolistaByID(this.plantilla.titular11);
    this.banca1 = this.futbolistaService.getFutbolistaByID(this.plantilla.banca1);
    this.banca2 = this.futbolistaService.getFutbolistaByID(this.plantilla.banca2);
    this.banca3 = this.futbolistaService.getFutbolistaByID(this.plantilla.banca3);
    this.reserva1 = this.futbolistaService.getFutbolistaByID(this.plantilla.reserva1);
    this.reserva2 = this.futbolistaService.getFutbolistaByID(this.plantilla.reserva2);
    this.reserva3 = this.futbolistaService.getFutbolistaByID(this.plantilla.reserva3);
    this.reserva4 = this.futbolistaService.getFutbolistaByID(this.plantilla.reserva4);
    this.reserva5 = this.futbolistaService.getFutbolistaByID(this.plantilla.reserva5);

  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  actualizarFutbolistaSale(id) {
    this.futbolistaSale = this.futbolistaService.getFutbolistaByID(id);
  }

  actualizarFutbolistaEntra(id) {
    this.futbolistaEntra = this.futbolistaService.getFutbolistaByID(id);
  }

  actualizarCapitan(id) {
    this.capitan = this.futbolistaService.getFutbolistaByID(id);
  }

  submit() {
    this.plantilla = this.plantillaService.buscarPlantillaMiEquipo(this.equipo.id);
    this.plantilla.capitan = this.capitan.id;
    if(this.plantilla.capitan == this.futbolistaEntra.id){
      this.plantilla.capitan = this.futbolistaSale.id;
    }else if(this.plantilla.capitan == this.futbolistaSale.id){
      this.plantilla.capitan = this.futbolistaEntra.id;
    }
    if (this.plantilla.titular1 == this.futbolistaSale.id){
      this.plantilla.titular1 = this.futbolistaEntra.id;
                      if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.titular2 == this.futbolistaSale.id){
      this.plantilla.titular2 = this.futbolistaEntra.id;
                      if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.titular3 == this.futbolistaSale.id){
      this.plantilla.titular3 = this.futbolistaEntra.id;
                      if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.titular4 == this.futbolistaSale.id){
      this.plantilla.titular4 = this.futbolistaEntra.id;
                      if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.titular5 == this.futbolistaSale.id){
      this.plantilla.titular5 = this.futbolistaEntra.id;
                      if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.titular6 == this.futbolistaSale.id){
      this.plantilla.titular6 = this.futbolistaEntra.id;
                      if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.titular7 == this.futbolistaSale.id){
      this.plantilla.titular7 = this.futbolistaEntra.id;
                      if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.titular8 == this.futbolistaSale.id){
      this.plantilla.titular8 = this.futbolistaEntra.id;
                      if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.titular9 == this.futbolistaSale.id){
      this.plantilla.titular9 = this.futbolistaEntra.id;
                      if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.titular10 == this.futbolistaSale.id){
      this.plantilla.titular10 = this.futbolistaEntra.id;
                      if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.titular11 == this.futbolistaSale.id){
      this.plantilla.titular11 = this.futbolistaEntra.id;
                      if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.banca1 == this.futbolistaSale.id){
      this.plantilla.banca1 = this.futbolistaEntra.id;
                      if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.banca2 == this.futbolistaSale.id){
      this.plantilla.banca2 = this.futbolistaEntra.id;
                       if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.banca3 == this.futbolistaSale.id){
      this.plantilla.banca3 = this.futbolistaEntra.id;
                       if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.reserva1 == this.futbolistaSale.id){
      this.plantilla.reserva1 = this.futbolistaEntra.id;
                       if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.reserva2 == this.futbolistaSale.id){
      this.plantilla.reserva2 = this.futbolistaEntra.id;
                       if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.reserva3 == this.futbolistaSale.id){
      this.plantilla.reserva3 = this.futbolistaEntra.id;
                       if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.reserva4 == this.futbolistaSale.id){
      this.plantilla.reserva4 = this.futbolistaEntra.id;
                       if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva5 == this.futbolistaEntra.id){
                        this.plantilla.reserva5 = this.futbolistaSale.id;
                      }
    } else if (this.plantilla.reserva5 == this.futbolistaSale.id){
      this.plantilla.reserva5 = this.futbolistaEntra.id;
                       if (this.plantilla.titular2 == this.futbolistaEntra.id){
                        this.plantilla.titular2 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular3 == this.futbolistaEntra.id){
                        this.plantilla.titular3 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular4 == this.futbolistaEntra.id){
                        this.plantilla.titular4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular5 == this.futbolistaEntra.id){
                        this.plantilla.titular5 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular6 == this.futbolistaEntra.id){
                        this.plantilla.titular6 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular7 == this.futbolistaEntra.id){
                        this.plantilla.titular7 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular8 == this.futbolistaEntra.id){
                        this.plantilla.titular8 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular9 == this.futbolistaEntra.id){
                        this.plantilla.titular9 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular10 == this.futbolistaEntra.id){
                        this.plantilla.titular10 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular11 == this.futbolistaEntra.id){
                        this.plantilla.titular11 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca1 == this.futbolistaEntra.id){
                        this.plantilla.banca1 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca2 == this.futbolistaEntra.id){
                        this.plantilla.banca2 = this.futbolistaSale.id;
                      } else if (this.plantilla.banca3 == this.futbolistaEntra.id){
                        this.plantilla.banca3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva1 == this.futbolistaEntra.id){
                        this.plantilla.reserva1 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva2 == this.futbolistaEntra.id){
                        this.plantilla.reserva2 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva3 == this.futbolistaEntra.id){
                        this.plantilla.reserva3 = this.futbolistaSale.id;
                      } else if (this.plantilla.reserva4 == this.futbolistaEntra.id){
                        this.plantilla.reserva4 = this.futbolistaSale.id;
                      } else if (this.plantilla.titular1 == this.futbolistaEntra.id){
                        this.plantilla.titular1 = this.futbolistaSale.id;
                      }
    }
    this.plantillaService.actualizarPlantillaJugador(this.plantilla);
    this.modalService.dismissAll();
    this.router.navigate(['/pruebita']);


  }
}
