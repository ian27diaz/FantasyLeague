import { Injectable } from '@angular/core';
import { Liga } from './Liga';

@Injectable({
  providedIn: 'root'
})
export class LigaService {
  ligas: Liga[] = [
    new Liga(1, 'Liga DASW'),
    new Liga(2, 'Liga de la justicia')
  ];

  constructor() { }


  
  getEquipo(): Liga[] {
    return this.ligas;
  }
}
