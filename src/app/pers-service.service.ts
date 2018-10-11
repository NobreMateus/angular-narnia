import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {PERSONAGENS} from './personagens'
import {personagem} from './personagem'


@Injectable({
  providedIn: 'root'
})
export class PersServiceService {

  constructor() { }

  getPersonagens(): Observable<personagem[]> {
    return of(PERSONAGENS);
  }

}
