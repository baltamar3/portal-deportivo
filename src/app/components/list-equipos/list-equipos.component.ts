import { Component, OnInit, Input } from '@angular/core';
import { PushNotificationsService } from 'ng-push';

import { EquiposService } from './../../services/equipos.service';


@Component({
  selector: 'app-list-equipos',
  templateUrl: './list-equipos.component.html',
  styleUrls: ['./list-equipos.component.css']
})
export class ListEquiposComponent implements OnInit {
  equipos = []
  idFavoritos:any = JSON.parse(localStorage.getItem("idFavoritos"));
  listaFavoritos:any = JSON.parse(localStorage.getItem("listaFavoritos"));

  constructor(private EquiposService: EquiposService, private _notificacion: PushNotificationsService) {
    this._notificacion.requestPermission();
  }

  ngOnInit() {
    this.getListEquipos();
  }

  getListEquipos(): void {
    this.EquiposService.getEquipos().subscribe((data)=>{
      console.log(data["teams"]);
      this.equipos = data['teams'];
    });
  }

  addIdEquiposFavoritos(id) {
    if (this.idFavoritos==null) {
      this.idFavoritos=[]
    }else{
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
      localStorage.setItem("idFavoritos",JSON.stringify(this.idFavoritos))
      //localStorage.setItem('datos', JSON.stringify(this.equiposFavoritos));
      this.addEquipoToFavoritos(id)
    }else{
      alert("Este equipo ya esta en sus favoritos")
    }
  }

  addEquipoToFavoritos(id): void {
    this.EquiposService.getEquipoByid(id).subscribe((data) => {
      if (this.listaFavoritos==null) {
        this.listaFavoritos=[]
      }else{
        this.listaFavoritos = JSON.parse(localStorage.getItem("listaFavoritos"));
      }
      this.listaFavoritos.push(data['teams'][0]);
      localStorage.setItem("listaFavoritos",JSON.stringify(this.listaFavoritos));
      alert("exito");
      //this.notify()
    });
    console.log(this.listaFavoritos)
  }

  notify(){ //our function to be called on click
    let options = { //set options
      body: "Equipo Agregado a Favoritos!",
      icon: "assets/images/ironman.png" //adding an icon
    }
     this._notificacion.create('Iron Man', options).subscribe( //creates a notification
        res => console.log(res),
        err => console.log(err)
    );
  }

}
