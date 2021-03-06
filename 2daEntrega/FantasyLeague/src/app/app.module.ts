import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { LobbyComponent } from './lobby/lobby.component';
import { FutbolistasComponent } from './futbolistas/futbolistas.component';
import { FutbolistaComponent } from './Futbolistas/futbolista/futbolista.component';
import { LigaComponent } from './liga/liga.component';
import { EnfrentamientosComponent } from './Liga/enfrentamientos/enfrentamientos.component';
import { EnfrentamientoComponent } from './Liga/Enfrentamientos/enfrentamiento/enfrentamiento.component';
import { TablaPosicionesComponent } from './Liga/tabla-posiciones/tabla-posiciones.component';
import { ReglamentoComponent } from './reglamento/reglamento.component';
import { HeaderComponent } from './header/header.component';
import { MiEquipoComponent } from './mi-equipo/mi-equipo.component';
import {FormsModule} from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalCambiosComponent } from './mi-equipo/modal-cambios/modal-cambios.component';
import { ModalReservaComponent } from './mi-equipo/modal-reserva/modal-reserva.component';
import { ModalJugadorComponent } from './modal-jugador/modal-jugador.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PruebaComponent } from './prueba/prueba.component';
import { SinLigaComponent } from './sin-liga/sin-liga.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    LobbyComponent,
    FutbolistasComponent,
    FutbolistaComponent,
    LigaComponent,
    EnfrentamientosComponent,
    EnfrentamientoComponent,
    TablaPosicionesComponent,
    ReglamentoComponent,
    HeaderComponent,
    MiEquipoComponent,
    ModalCambiosComponent,
    ModalReservaComponent,
    ModalJugadorComponent,
    PruebaComponent,
    SinLigaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModalModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
