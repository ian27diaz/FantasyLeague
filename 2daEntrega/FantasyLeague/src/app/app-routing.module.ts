import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './log/log.component';
import { ReglamentoComponent } from './reglamento/reglamento.component';
import { MiEquipoComponent } from './mi-equipo/mi-equipo.component';
import { FutbolistasComponent } from './futbolistas/futbolistas.component';
import { LigaComponent } from './liga/liga.component';
import { EnfrentamientosComponent } from './Liga/enfrentamientos/enfrentamientos.component';
import { TablaPosicionesComponent } from './Liga/tabla-posiciones/tabla-posiciones.component';

import { LobbyComponent } from './lobby/lobby.component';

import { EnfrentamientoComponent } from './Liga/Enfrentamientos/enfrentamiento/enfrentamiento.component';
import { FutbolistaComponent } from './Futbolistas/futbolista/futbolista.component';


const routes: Routes = [
  {path: '', redirectTo: '/authentication', pathMatch: 'full'},
  {path: 'authentication', component: LogComponent},
  {path: 'reglamento', component: ReglamentoComponent},
  {path: 'miequipo', component: MiEquipoComponent},
  {path: 'liga', component: LigaComponent, children: [
    {path: '', component: TablaPosicionesComponent},
    {path: 'enfrentamientos', component: EnfrentamientosComponent, children: [
      {path: '', component: EnfrentamientosComponent},
      {path: ':id', component: EnfrentamientoComponent}
    ]},
    {path: 'posiciones', component: TablaPosicionesComponent}

  ]},
  {path: 'futbolistas', component: FutbolistasComponent},
  {path: 'lobby', component: LobbyComponent},
  {path: 'pruebaEnfrentamiento', component: EnfrentamientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
