import { Component, OnInit } from '@angular/core';
import { personagem } from '../personagem';
import { PersServiceService } from '../pers-service.service';

@Component({
  selector: 'app-narnianos',
  templateUrl: './narnianos.component.html',
  styleUrls: ['./narnianos.component.css']
})
export class NarnianosComponent implements OnInit {

  personagens: personagem[];

  constructor(private pers: PersServiceService) {

  }

  ngOnInit(){
    this.pers.getNarnianos()
      .subscribe(pers => this.personagens=pers)  
  }      
}
