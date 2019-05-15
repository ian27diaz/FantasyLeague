import { Component, OnInit } from '@angular/core';
import { Equipo } from '../mi-equipo/Equipo';
import { EquiposService } from '../mi-equipo/equipos.service';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  equipos: Equipo[];
  closeResult: string;
  infoLiga = 1;
  infoRubro = 1;
  activeTabla = 'nav-item active';
  activeEnfrentamientos = 'nav-item';
  activeEstadisticas = 'nav-item';
  private subscript: Subscription;
  idUser: number;
  constructor(private equiposService: EquiposService,
              private usuarioService: UsuarioService,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {
    if (!this.usuarioService.isUserLogged()) {
      this.router.navigate(['/authentication']);
    } 
    this.usuarioService.getCurrentUserID();
    this.usuarioService.currentUserID.subscribe((dato: number) => {
      this.idUser = dato;
      console.log('On NGInit in lobbyC');
      console.log(this.idUser);
      this.equiposService.getEquipoPropietario(this.idUser).then((equipos_) => {
        this.equipos = equipos_;
        console.log('En lobbyComponent');
        console.log(this.equipos);
      }).catch(err => {
        console.log(err);
      });
      console.log('EQUIPOS: ' + this.equipos + '\n FINEQUIPOS');
      console.log(dato);
    }, (error: any) => {
      console.log(error);
    })
    // let id = this.usuarioService.getCurrentUserID();
    // console.log(id + ' in lobbyComponent.');
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

  actualizarCurrentEquipo(equipo) {
    this.equiposService.actualizarEquipo(equipo);
    this.router.navigate(['/miequipo']);
  }

  agregarEquipo(form: NgForm){
    console.log(form.value);

    this.equiposService.crearEquipoNuevo(form.value.nombreEquipo, this.idUser).then(() => {
      this.modalService.dismissAll();
      this.router.navigate(['/miequipo']);
    }).catch(err => {
        console.log(err);
      });
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
