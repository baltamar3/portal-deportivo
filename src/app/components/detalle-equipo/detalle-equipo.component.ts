import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EquiposService } from './../../services/equipos.service';

@Component({
  selector: 'app-detalle-equipo',
  templateUrl: './detalle-equipo.component.html',
  styleUrls: ['./detalle-equipo.component.css']
})
export class DetalleEquipoComponent implements OnInit {
  detalleEquipo = [];
  tablaDePosiciones = [];
  posicionN = 0;
  eventosPasados = [];
  eventosProximos = [];
  calendario = []
  

  constructor(private EquiposService: EquiposService, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.getEquipoById(this.rutaActiva.snapshot.params['id']);
    this.getTablaDePosiciones();
    this.getUltimos5Eventos(this.rutaActiva.snapshot.params['id']);
    this.getProximos5Eventos(this.rutaActiva.snapshot.params['id']);
    this.getCalendario()
  }

  getnow() : string { return Date();}
  
  getEquipoById(id: string) {
    this.EquiposService.getEquipoByid(id).subscribe((data) => {
      console.log("Equipo encontrado:", data["teams"]);
      this.detalleEquipo = data['teams'];
    });
  }

  getTablaDePosiciones() {
    this.EquiposService.getTablaDePosiciones().subscribe((data) => {
      console.log("Tabla:", data["table"]);
      this.tablaDePosiciones = data['table'];
    });
  }

  getUltimos5Eventos(id: string) {
    this.EquiposService.getUltimos5Eventos(id).subscribe((data) => {
      console.log("results:", data["results"]);
      this.eventosPasados = data['results'];
    });
  }

  getProximos5Eventos(id: string) {
    this.EquiposService.getProximos5Eventos(id).subscribe((data) => {
      console.log("eventos proximos:", data["events"]);
      this.eventosProximos = data['events'];
    });
  }

  getCalendario(){
    this.EquiposService.getCalendario().subscribe((data) => {
      console.log("Calendario de la liga:", data["events"]);
      this.calendario = data['events'];
    });
  }

  getDetallesEventoPasado(fecha:Date):void{
    //if(fecha<Date.now()){return true}
  }

  getDetalleEvento(id:string){
    this.EquiposService.getDetalleEvento(id).subscribe((data) => {
      console.log("evento id:", data["events"]);
    });
  }

}
