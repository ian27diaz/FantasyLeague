import { Component, OnInit } from '@angular/core';
import { Futbolista } from './futbolista/Futbolista';
import { FutbolistasService } from './futbolistas.service';


@Component({
  selector: 'app-futbolistas',
  templateUrl: './futbolistas.component.html',
  styleUrls: ['./futbolistas.component.css']
})
export class FutbolistasComponent implements OnInit {
  futbolistas: Futbolista[];

  constructor(private futbolistasService: FutbolistasService) { }

  ngOnInit() {
    this.futbolistas = this.futbolistasService.getFutbolista();
  }

}
