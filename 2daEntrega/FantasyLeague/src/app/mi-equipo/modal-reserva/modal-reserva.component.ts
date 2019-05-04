import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Futbolista } from 'src/app/futbolistas/futbolista/Futbolista';
import { Equipo } from '../Equipo';
import { Plantilla } from '../Plantilla';
import { EquiposService } from '../equipos.service';
import { PlantillaService } from '../plantilla.service';
import { FutbolistasService } from 'src/app/futbolistas/futbolistas.service';
@Component({
  selector: 'app-modal-reserva',
  templateUrl: './modal-reserva.component.html',
  styleUrls: ['./modal-reserva.component.css']
})
export class ModalReservaComponent implements OnInit {
  plantilla: Plantilla;
  equipo: Equipo;
  reserva1: Futbolista;
  reserva2: Futbolista;
  reserva3: Futbolista;
  reserva4: Futbolista;
  reserva5: Futbolista;
  closeResult: string;
  constructor(private modalService: NgbModal, private plantillaService: PlantillaService,
    private equipoService: EquiposService, private futbolistaService: FutbolistasService) { }

  ngOnInit() {
    this.equipo = this.equipoService.getCurrentEquipo();
    this.plantilla = this.plantillaService.buscarPlantillaMiEquipo(this.equipo.id);
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

}
