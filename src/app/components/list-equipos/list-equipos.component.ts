import { Component, OnInit, Input } from '@angular/core';
import { EquiposService } from './../../services/equipos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-equipos',
  templateUrl: './list-equipos.component.html',
  styleUrls: ['./list-equipos.component.css']
})
export class ListEquiposComponent implements OnInit {
  equipos = []
  idFavoritos: any = JSON.parse(localStorage.getItem("idFavoritos"));
  listaFavoritos: any = JSON.parse(localStorage.getItem("listaFavoritos"));

  constructor(private EquiposService: EquiposService) {

  }

  ngOnInit() {
    this.getListEquipos();
  }

  getListEquipos(): void {
    this.EquiposService.getEquipos().subscribe((data) => {
      console.log(data["teams"]);
      this.equipos = data['teams'];
    });
  }

  addIdEquiposFavoritos(id) {
    if (this.idFavoritos == null) {
      this.idFavoritos = []
    } else {
      this.idFavoritos = JSON.parse(localStorage.getItem("idFavoritos"));
    }
    let guardar = true;
    for (let i = 0; i < this.idFavoritos.length; i++) {
      if (id == this.idFavoritos[i]) {
        guardar = false;
      }
    }
    if (guardar) {
      this.idFavoritos.push(id)
      localStorage.setItem("idFavoritos", JSON.stringify(this.idFavoritos))
      this.addEquipoToFavoritos(id)

    } else {
      this.showAlertSwee("Este equipo ya esta en tus favoritos","info",1000)
    }
  }

  addEquipoToFavoritos(id): void {
    this.EquiposService.getEquipoByid(id).subscribe((data) => {
      if (this.listaFavoritos == null) {
        this.listaFavoritos = []
      } else {
        this.listaFavoritos = JSON.parse(localStorage.getItem("listaFavoritos"));
      }
      this.listaFavoritos.push(data['teams'][0]);
      localStorage.setItem("listaFavoritos", JSON.stringify(this.listaFavoritos));
      this.showAlertSwee("Agregado a tus favoritos","success",1200)
    });
  }

  showAlertSwee(text, icon, timer): void {
    Swal.fire({
      text,icon,timer
    });
  }

}
