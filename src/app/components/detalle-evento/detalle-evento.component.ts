import { Component, OnInit } from '@angular/core';
import { EquiposService } from './../../services/equipos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.css']
})
export class DetalleEventoComponent implements OnInit {
  detalleEvento = [];
  urlEscudoEquipoLocal = "";
  urlEscudoEquipoVisitante = "";

  constructor(private EquiposService: EquiposService, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.getDetalleEvento(this.rutaActiva.snapshot.params['id']);
  }

  getDetalleEvento(id: string) {
    this.EquiposService.getDetalleEvento(id).subscribe((data) => {
      console.log("evento id:", data["events"]);
      this.detalleEvento = data["events"];
      console.log(this.detalleEvento)
      this.EquiposService.getEquipoByid(data["events"][0].idHomeTeam).subscribe((equipo) => {
        this.urlEscudoEquipoLocal = equipo['teams'][0].strTeamBadge;
      });
      this.EquiposService.getEquipoByid(data["events"][0].idAwayTeam).subscribe((equipo) => {
        this.urlEscudoEquipoVisitante = equipo['teams'][0].strTeamBadge;
      });
    });
  }

}
