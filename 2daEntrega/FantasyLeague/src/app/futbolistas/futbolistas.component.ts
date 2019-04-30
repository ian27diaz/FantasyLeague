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
  selectorNombre = '';
  selectorCompeticion = '';
  selectorClub = '';
  selectorPosicion = '';
  edadMin = 15;
  edadMax = 50;
  precioMin = 0;
  precioMax = 500;

  constructor(private futbolistasService: FutbolistasService) { }

  ngOnInit() {
    this.futbolistas = this.futbolistasService.getFutbolista();
  }

  cambiarCompeticion(selCompeticion) {
    this.selectorCompeticion = selCompeticion;
    console.log(this.selectorCompeticion);
  }
  cambiarClub(selClub) {
    this.selectorClub = selClub;
    console.log(this.selectorClub);
  }
  cambiarPosicion(selPos) {
    this.selectorPosicion = selPos;
    console.log(this.selectorPosicion);
  }

  EstablecerEdadMinima(edad) {
    this.edadMin = edad;
    console.log(this.edadMin);
  }
  EstablecerEdadMaxima(edad) {
    this.edadMax = edad;
  }
  EstablecerPrecioMinimo(precio) {
    this.precioMin = precio;
  }
  EstablecerPrecioMaximo(precio) {
    this.precioMax = precio;
  }

  CambiarNombre(nombre) {
    this.selectorNombre = nombre;
    console.log(this.selectorNombre);
  }

  submit() {
    this.futbolistas = this.futbolistasService.filterFutbolista(this.selectorNombre, this.selectorCompeticion, this.selectorClub, this.selectorPosicion, this.edadMin, this.edadMax, this.precioMin, this.precioMax);
    }
    

}
