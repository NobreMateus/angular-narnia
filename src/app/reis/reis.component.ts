import { Component, OnInit } from '@angular/core';
import { personagem } from '../personagem';
import { PersServiceService } from '../pers-service.service';

@Component({
  selector: 'app-reis',
  templateUrl: './reis.component.html',
  styleUrls: ['./reis.component.css']
})
export class ReisComponent implements OnInit {

  personagens: personagem[];

  constructor(private pers: PersServiceService) {

  }

  ngOnInit(){
    this.pers.getReis()
      .subscribe(pers => this.personagens=pers)  
  } 
}
