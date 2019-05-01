import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from './Usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  clossingSession = false;
  modoIniciarSesion: boolean;
  invalidForm: boolean;
  invalidFormR: boolean;
  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit() {
    this.modoIniciarSesion = true;
    this.invalidForm = false;
    this.invalidFormR = false;
  }

  register(user: NgForm) {
    if(user.valid && user.value.PassR === user.value.Pass2R) {
      this.invalidFormR = false;
      const usuario = new Usuario(2, user.value.UsuarioR, '', user.value.PassR, user.value.emailR);
      this.usuarioService.addUser(usuario);
      console.log(JSON.stringify(usuario));
      this.router.navigate(['/lobby']);
    } else {
      this.invalidFormR = true;
    }
  }

  login(user: NgForm) {
    // console.log(user.value.Usuario, );
    if(user.valid) {
      this.invalidForm = false;
      const validLogin = this.usuarioService.loginvalidate(user.value.Usuario, user.value.Password);
      if (validLogin) {
        this.router.navigate(['/lobby']);
      } else {
        this.invalidForm = true;
      }
      //redireccionar a Lobby
    } else {
      console.log('invalid');
      this.invalidForm = true;
      //resetear el form y mandar mensaje que diga: Usuario y/o contraseña incorrectoss
    }
  }

  changeMode(mode: boolean){
    this.modoIniciarSesion = mode;

    console.log(this.modoIniciarSesion);
  }
}
