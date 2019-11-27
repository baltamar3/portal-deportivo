import { Component, OnInit, Input } from '@angular/core';
import { EquiposService } from './../../services/equipos.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list-jugadores',
  templateUrl: './list-jugadores.component.html',
  styleUrls: ['./list-jugadores.component.css']
})
export class ListJugadoresComponent implements OnInit {
  jugadores = []
  imgPerfilNone = `https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg`
  @Input() equipoId: string;

  constructor(private EquiposService:EquiposService) { }

  ngOnInit() {
    this.getListEquipos(this.equipoId);
  }

  getListEquipos(equipoId: string): void {
    this.EquiposService.getJugadoresByEquipo(equipoId).subscribe((data)=>{
      console.log("Jugadores:", data["player"]);
      this.jugadores = data["player"]
    });
  }

}
