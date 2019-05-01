import { Component, OnInit, Input } from '@angular/core';
import { Futbolista } from './Futbolista';

@Component({
  selector: 'app-futbolista',
  templateUrl: './futbolista.component.html',
  styleUrls: ['./futbolista.component.css']
})

export class FutbolistaComponent implements OnInit {
  @Input() futbolista: Futbolista;

  constructor() {}

  ngOnInit() {

  }

}
