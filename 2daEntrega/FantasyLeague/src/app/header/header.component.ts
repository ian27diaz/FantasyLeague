import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show: boolean;
  inLobby: boolean;
  inSinLiga: boolean;
  userName: string;
  private usernameSubscript: Subscription;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private usuarioService: UsuarioService) { }
  ngOnInit() {    
    this.router.events.subscribe((val) => {
      this.show = !this.router.url.includes('authentication');
      this.inLobby = !this.router.url.includes('lobby');
      this.inSinLiga = !this.router.url.includes('sinliga');

    });
    this.usernameSubscript = this.usuarioService.currentUserName
    .subscribe((dato: string) => {
      this.userName = dato;
    });
    this.userName = 'Mi usuario';
  }

  cerrarsesion() {
    this.router.navigate(['/authentication']);
    this.userName = 'Mi usuario';
    this.usuarioService.closeSession();
  }
}
