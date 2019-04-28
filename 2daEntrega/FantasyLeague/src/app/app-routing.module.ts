import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './log/log.component';
import { ReglamentoComponent } from './reglamento/reglamento.component';
import { MiEquipoComponent } from './mi-equipo/mi-equipo.component';
import { FutbolistasComponent } from './futbolistas/futbolistas.component';
const routes: Routes = [
  {path: '', redirectTo: '/authentication', pathMatch: 'full'},
  {path: 'authentication', component: LogComponent},
  {path: 'reglamento', component: ReglamentoComponent},
  {path: 'miequipo', component: MiEquipoComponent},
  {path: 'futbolistaprueba', component: FutbolistasComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
