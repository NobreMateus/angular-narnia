import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {PERSONAGENS, NARNIANOS, REIS, CIDADES, HUMANOS} from './personagens'
import {personagem} from './personagem'


@Injectable({
  providedIn: 'root'
})
export class PersServiceService {

  constructor() { }

  getPersonagens(): Observable<personagem[]> {
    return of(PERSONAGENS);
  }

  getNarnianos(): Observable<personagem[]> {
    return of(NARNIANOS);
  }

  getReis(): Observable<personagem[]> {
    return of(REIS);
  }

  getCidades(): Observable<personagem[]> {
    return of(CIDADES);
  }

  getHumanos(): Observable<personagem[]> {
    return of(HUMANOS);
  }

}
