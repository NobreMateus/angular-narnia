import { Component, OnInit } from '@angular/core';
import { PersServiceService } from '../pers-service.service';
import { personagem } from '../personagem';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {
  
  personagens: personagem[];

  constructor(private pers: PersServiceService) {

  }

  ngOnInit(){
    this.pers.getCidades()
      .subscribe(pers => this.personagens=pers)  
  } 
}
