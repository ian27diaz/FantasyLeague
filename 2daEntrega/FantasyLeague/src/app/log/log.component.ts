import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from './Usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  usuario: Usuario;
  clossingSession = false;
  modoIniciarSesion: boolean;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.modoIniciarSesion = true;
    //Redireccionar a lobby si ya está loggeado através del servicio
  }

  login(user: NgForm) {
    if(user.valid) {
      console.log(user.value);
      this.usuarioService.loginvalidate(user.value.usuario, user.value.password);
      //redireccionar a Lobby
    } else {
      console.log('invalid');
      //resetear el form y mandar mensaje que diga: Usuario y/o contraseña incorrectoss
    }
  }

  changeMode(mode: boolean){
    this.modoIniciarSesion = mode;
    console.log(this.modoIniciarSesion);
  }
}
