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

  constructor(private EquiposService: EquiposService, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.getEquipoById(this.rutaActiva.snapshot.params['id']);
    this.getTablaDePosiciones();
  }

  getEquipoById(id: string){
    this.EquiposService.getEquipoByid(id).subscribe((data)=>{
      console.log("Equipo ecnontrado:", data["teams"]);
      this.detalleEquipo = data['teams'];
    });
  }

  getTablaDePosiciones(){
    this.EquiposService.getTablaDePosiciones().subscribe((data)=>{
      console.log("Tabla:", data["table"]);
      this.tablaDePosiciones = data['table'];
    });
  }
}
