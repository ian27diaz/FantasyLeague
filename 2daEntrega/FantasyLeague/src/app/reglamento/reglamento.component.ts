import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reglamento',
  templateUrl: './reglamento.component.html',
  styleUrls: ['./reglamento.component.css']
})
export class ReglamentoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }
  ngOnInit() {
    if(!this.usuarioService.isUserLogged()){
      this.router.navigate(['/authentication']);
    }
  }

}
