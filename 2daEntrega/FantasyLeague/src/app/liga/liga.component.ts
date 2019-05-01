import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit() {
    if(!this.usuarioService.isUserLogged()){
      this.router.navigate(['/authentication']);
    }
  }

}
