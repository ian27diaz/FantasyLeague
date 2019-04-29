import { Injectable } from '@angular/core';
import { Usuario } from './log/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  currentUser: Usuario;
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
  constructor() { }

  loginvalidate(userV, pass): boolean {
    const userIndex = this.usuarios.findIndex(user => user.nombre == userV && user.password == pass);
    if(userIndex >= 0){
      console.log(JSON.stringify(this.usuarios[userIndex]));
      this.currentUser = Object.assign({}, this.usuarios[userIndex]);
      return true;
    }
    return false;
  }
}
