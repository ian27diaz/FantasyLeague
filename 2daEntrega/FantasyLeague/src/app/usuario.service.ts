import { Injectable } from '@angular/core';
import { Usuario } from './log/Usuario';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }
  userLogged = false;
  currentToken: string = "";
  currentUserName = new Subject<string>();
  currentUserID = new Subject<number>();
  lastID = 1;

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


  addUser(user: Usuario): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post('http://127.0.0.1:3000/api/usuario/register', {
        usuario: user.nombre,
        password: user.password,
        email: user.email,
        foto: user.foto
      }).subscribe(token => {
        this.currentToken = token['token'];
        this.currentUserName.next(user.nombre);
        this.userLogged = true;
        resolve(true);
      });
      
    });
    
  }

  loginvalidate(userV, pass): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post('http://127.0.0.1:3000/api/usuario/login', {
        usuario: userV,
        password: pass
      }).subscribe(token => {

        this.currentToken = token['token'];
        console.log('current Token: ' + this.currentToken.toString());
        this.currentUserName.next(userV);
        this.userLogged = true;
        console.log(userV + ' - ' + pass);
        resolve(true);

      });
    });

  }


  closeSession() {
    this.currentToken = '';
    this.currentUserName.next('');
    this.userLogged = false;
  }

  isUserLogged() {
    return this.userLogged;
  }


  getCurrentUserID() {
    console.log('From GetCurrentUserID');
    console.log(this.currentToken);
    this.http.get('http://127.0.0.1:3000/api/usuario/login', {
      headers: { token: this.currentToken.toString() }
    }).subscribe(data => {
      console.log(data);
      console.log(JSON.stringify(data));
      this.currentUserID.next(Number(data['id']));
      console.log(this.currentUserID + ' hi');
      // return this.currentUserID;
    });
    // return this.currentUserID;
  }

  

}
