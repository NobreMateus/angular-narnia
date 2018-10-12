import { Component, OnInit } from '@angular/core';
import { PersServiceService } from '../pers-service.service';
import { personagem } from '../personagem';

@Component({
  selector: 'app-humanos',
  templateUrl: './humanos.component.html',
  styleUrls: ['./humanos.component.css']
})
export class HumanosComponent implements OnInit {

  personagens: personagem[];

  constructor(private pers: PersServiceService) {

  }

  ngOnInit(){
    this.pers.getHumanos()
      .subscribe(pers => this.personagens=pers)  

    console.log(this.personagens)  
  } 

}
