import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './cards/cards.component'
import {CabecalhoComponent} from './cabecalho/cabecalho.component'
import { PersonagensComponent } from './personagens/personagens.component';
import { NarnianosComponent } from './narnianos/narnianos.component';
import { ReisComponent } from './reis/reis.component';
import { HumanosComponent } from './humanos/humanos.component';
import { CidadesComponent } from './cidades/cidades.component';

export const ROUTES: Routes = [
    {path:"", component:CardsComponent},
    {path:"personagens", component:PersonagensComponent},
    {path:"narnianos", component:NarnianosComponent},
    {path:"reis", component:ReisComponent},
    {path:"humanos", component:HumanosComponent},
    {path:"cidades", component:CidadesComponent},

]