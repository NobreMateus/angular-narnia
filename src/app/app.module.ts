import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './routes'

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { NarnianosComponent } from './narnianos/narnianos.component';
import { ReisComponent } from './reis/reis.component';
import { HumanosComponent } from './humanos/humanos.component';
import { CidadesComponent } from './cidades/cidades.component';
import { InicioComponent } from './inicio/inicio.component';
//import { PersService } from './pers.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CardComponent,
    CardsComponent,
    PersonagensComponent,
    NarnianosComponent,
    ReisComponent,
    HumanosComponent,
    CidadesComponent,
    InicioComponent
  ],  
  imports: [
    BrowserModule,  
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
