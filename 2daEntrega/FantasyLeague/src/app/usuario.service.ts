import { Injectable } from '@angular/core';
import { Usuario } from './log/Usuario';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  userLogged = false;
  private lastID = 1;

  usuarios: Usuario[] = [
    new Usuario(this.lastID++, 'LuisFernando', 'usuario-' + this.lastID, 'DASW', 'lgutierrez@iteso.mx'),
    new Usuario(this.lastID++, 'PizaElElegido', 'usuario-' + this.lastID, 'pepperoni', 'hpiza@iteso.mx'),
    new Usuario(this.lastID++, 'ElSteve', 'usuario-' + this.lastID, 'hawking', 'stephen@heaven.com'),
    new Usuario(this.lastID++, 'VictorElNazi', 'usuario-' + this.lastID, 'bases', 'vortega@iteso.mx'),
    new Usuario(this.lastID++, 'ElNuevoCoordi', 'usuario-' + this.lastID, 'franciscomlp', 'parres@iteso.mx'),
    new Usuario(this.lastID++, 'GeorgiBarba', 'usuario-' + this.lastID, 'barba', 'jbarba@iteso.mx'),
    new Usuario(this.lastID++, 'Rizod', 'usuario-' + this.lastID, 'amor', 'lrizo@iteso.mx'),
    new Usuario(this.lastID++, 'Gaticx', 'usuario-' + this.lastID, 'joaquinyadejameenpaz', 'luisgatica@iteso.mx'),
    new Usuario(this.lastID++, 'Gerry', 'usuario-' + this.lastID, 'redes', 'gjmunguia@iteso.mx'),
    new Usuario(this.lastID++, 'Don Mamey', 'usuario-' + this.lastID, '8051', 'pedrosaldana@iteso.mx'),
    new Usuario(this.lastID++, 'Old Rector', 'usuario-' + this.lastID, 'money', 'elrec@iteso.mx'),
    new Usuario(this.lastID++, 'AMLO', 'usuario-' + this.lastID, 'ricky rickin canayin', 'AMLO@cuartatransformacion.mx'),
    new Usuario(this.lastID++, 'Bernal', 'usuario-' + this.lastID, 'PAPS', 'luis@iteso.mx'),
    new Usuario(this.lastID++, 'ElViejoCoordi', 'usuario-' + this.lastID, 'te odio parres', 'fcervantes@iteso.mx'),
    new Usuario(this.lastID++, 'Villalove', 'usuario-' + this.lastID, 'love', 'villalon@iteso.mx'),
    new Usuario(this.lastID++, 'Luthe', 'usuario-' + this.lastID, 'oracle', 'rluthe@iteso.mx')
  ];

  currentUser: Usuario;
  currentUserName = new Subject<string>();
  constructor() { }

  loginvalidate(userV, pass): boolean {
    console.log(userV + " " + pass);
    const userIndex = this.usuarios.findIndex(user => user.nombre == userV && user.password == pass);
    if(userIndex >= 0) {
      console.log(JSON.stringify(this.usuarios[userIndex]) + " holis");
      this.currentUser = Object.assign({}, this.usuarios[userIndex]);
      this.currentUserName.next(this.currentUser.nombre);
      this.userLogged = true;
      return true;
    }
    return false;
  }

  closeSession(){
    this.currentUser = undefined;
    this.currentUserName.next('');
    this.userLogged = false;
  }

  isUserLogged() {
    return this.userLogged;
  }

  addUser(usuario: Usuario) {
    usuario.id = this.lastID;
    const userIndex = this.usuarios.findIndex(user => user.nombre == usuario.nombre);
    if (userIndex >= 0) { return; }

    this.usuarios.push(Object.assign({}, usuario));
    this.currentUser = Object.assign({}, this.usuarios[this.usuarios.length - 1]);
    this.currentUserName.next(this.currentUser.nombre);
    this.userLogged = true;
    this.lastID++;
  }

  getCurrentUserID() {
    return this.currentUser.id;
  }
}
