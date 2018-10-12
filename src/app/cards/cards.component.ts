import { Component, OnInit } from '@angular/core';

import {personagem} from '../personagem'
import { PersServiceService } from '../pers-service.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  personagens: personagem[];

  constructor(private pers: PersServiceService) {

  }

  ngOnInit(){
    this.pers.getPersonagens()
      .subscribe(pers => this.personagens=pers)    
  }
}
