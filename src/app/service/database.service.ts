import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Injectable } from "@angular/core";
import { Foto } from '../fotografia/foto/fotos';



@Injectable({
    providedIn: 'root'
})

export class DatabaseService {

    readonly API = 'http://localhost:3000/imagens/';



HttpOptions = {
    headers: new HttpHeaders ({'Content-Type' : 'application/json'})
};

constructor(private http: HttpClient) {}


getFotos(){
    return this.http.get<Foto[]>(this.API);
  }

 
  postFotos(foto: Foto){
    return this.http.post(this.API, JSON.stringify(foto), this.HttpOptions).subscribe();
  }

  
  deletarFotos(id: number){
    return this.http.delete(this.API + id).subscribe();
  }

}