import { Component } from '@angular/core';
import {personagem} from './personagem'
import { PersServiceService } from './pers-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  personagens: personagem[];
  
  ngOnInit(){
    this.pers.getPersonagens()
      .subscribe(pers => this.personagens=pers)    
  }

  constructor(private pers: PersServiceService ){
  
  }



}
