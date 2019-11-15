import { Component, OnInit, Input } from '@angular/core';
import { EquiposService } from './../../services/equipos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-jugador',
  templateUrl: './detalle-jugador.component.html',
  styleUrls: ['./detalle-jugador.component.css']
})
export class DetalleJugadorComponent implements OnInit {
  jugadorDetalle = [];

  constructor(private EquiposService: EquiposService, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.getJugadorbyId(this.rutaActiva.snapshot.params['id']);
  }

  getJugadorbyId(jugadorId: string): void {
    this.EquiposService.getJugadorByid(jugadorId).subscribe((data) => {
      let a = data["players"]
      console.log(a);
      this.jugadorDetalle = data["players"]
    });
  }

}
