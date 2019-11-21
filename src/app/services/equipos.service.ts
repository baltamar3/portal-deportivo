import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(protected http: HttpClient) { }

  getEquipos() {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League');
  }

  getEquipoByid(equipoId:string){
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${equipoId}`)
  }

  getJugadoresByEquipo(equipoId:string){
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${equipoId}`)
  }

  getJugadorByid(jugadorId:string){
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${jugadorId}`)
  }

  getTablaDePosiciones(){
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920`);
  }

  getUltimos5Eventos(equipoId:string){
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${equipoId}`)
  }

  getProximos5Eventos(equipoId:string){
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${equipoId}`)
  }

  getCalendario(){
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=1920`);
  }
  
}
