import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleEquipoComponent } from './components/detalle-equipo/detalle-equipo.component';
import { ListEquiposComponent } from './components/list-equipos/list-equipos.component';
import { DetalleJugadorComponent } from './components/detalle-jugador/detalle-jugador.component';
import { DetalleEventoComponent } from './components/detalle-evento/detalle-evento.component';
 
const routes: Routes = [
  { path: 'equipos', component: ListEquiposComponent },
  { path: 'equipo/:id', component: DetalleEquipoComponent },
  { path: 'jugador/:id', component: DetalleJugadorComponent },
  { path: 'evento/:id', component: DetalleEventoComponent },
  { path: '', redirectTo: '/equipos', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
