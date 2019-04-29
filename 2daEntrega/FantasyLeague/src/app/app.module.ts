import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    MiEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
