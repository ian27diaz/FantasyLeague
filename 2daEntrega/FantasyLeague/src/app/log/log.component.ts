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
      this.usuarioService.addUser(usuario).then(() => {
        this.router.navigate(['/lobby']);

      }).catch((err) => {
        this.invalidForm = true;
      });

    } else {
      this.invalidFormR = true;
    }
  }

  login(user: NgForm) {
    // console.log(user.value.Usuario, );
    if(user.valid) {
      this.invalidForm = false;
      this.usuarioService.loginvalidate(user.value.Usuario, user.value.Password).then(() =>{
          this.router.navigate(['/lobby']);
      
      }).catch((err) => {
        this.invalidForm = true;
      });
      
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
