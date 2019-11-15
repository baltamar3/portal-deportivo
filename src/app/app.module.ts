import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EquiposService } from "./services/equipos.service";
import { DetalleEquipoComponent } from './components/detalle-equipo/detalle-equipo.component';
import { ListEquiposComponent } from './components/list-equipos/list-equipos.component';
import { ListJugadoresComponent } from './components/list-jugadores/list-jugadores.component';
import { DetalleJugadorComponent } from './components/detalle-jugador/detalle-jugador.component'

@NgModule({
  declarations: [
    AppComponent,
    DetalleEquipoComponent,
    ListEquiposComponent,
    ListJugadoresComponent,
    DetalleJugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EquiposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
