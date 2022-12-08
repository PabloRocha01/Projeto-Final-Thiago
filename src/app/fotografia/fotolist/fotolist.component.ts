import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';
import { Foto } from '../foto/fotos';

@Component({
  selector: 'app-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent implements OnInit {
  
  fotos: Foto[] = [];

  constructor(private banco: DatabaseService){ }

  ngOnInit(): void {
   this.banco.getFotos().subscribe(results => this.fotos = results);
  }

  deletar(id: number){
   
    this.banco.deletarFotos(id);
    location.reload();

  }
  
}
