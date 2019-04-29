import { Injectable } from '@angular/core';
import { Futbolista } from './futbolista/Futbolista';


@Injectable({
  providedIn: 'root'
})
export class FutbolistasService {
    futbolistas: Futbolista[] = [
    new Futbolista(1, 'Samir Handanovic', 'assets/images/Futbolistas/Futbolista-1.png', 34, 'PO', 6, 'Internazionale', 'Serie A', 'Eslovenia'),
    new Futbolista(7, 'Manuel Neuer', 'assets/images/Futbolistas/Futbolista-7.png', 33, 'PO', 22, 'Bayern Munchen', 'Bundesliga', 'Alemania'),
    new Futbolista(11, 'Gianluigi Buffon', 'assets/images/Futbolistas/Futbolista-11.png', 41, 'PO', 1, 'Paris Saint Germain', 'Ligue 1', 'Italia'),
    new Futbolista(16, 'David De Gea', 'assets/images/Futbolistas/Futbolista-16.png', 28, 'PO', 70, 'Manchester United', 'Premier League', 'España'),
    new Futbolista(26, 'Alessandro Florenzi', 'assets/images/Futbolistas/Futbolista-26.png', 28, 'LD-DFD-MD-MC-ED', 30, 'Roma', 'Serie A', 'Italia'),
    new Futbolista(36, 'Thomas Meunier', 'assets/images/Futbolistas/Futbolista-36.png', 27, 'LD-DFD-MD-MI', 35, 'Paris Saint Germain', 'Ligue 1', 'Bélgica'),
    new Futbolista(37, 'Dani Alves', 'assets/images/Futbolistas/Futbolista-37.png', 30, '', 0, '', '', ''),
    new Futbolista(41, 'Cesar Azpilicueta', 'assets/images/Futbolistas/Futbolista-41.png', 30, '', 0, '', '', ''),
    new Futbolista(51, 'Giorgio Chiellini', 'assets/images/Futbolistas/Futbolista-51.png', 30, '', 0, '', '', ''),
    new Futbolista(53, 'Leonardo Bonucci', 'assets/images/Futbolistas/Futbolista-53.png', 30, '', 0, '', '', ''),
    new Futbolista(55, 'Milan Skriniar', 'assets/images/Futbolistas/Futbolista-55.png', 30, '', 0, '', '', ''),
    new Futbolista(71, 'Thiago Silva', 'assets/images/Futbolistas/Futbolista-71.png', 30, '', 0, '', '', ''),
    new Futbolista(82, 'Virgil Van Dijk', 'assets/images/Futbolistas/Futbolista-82.png', 30, '', 0, '', '', ''),
    new Futbolista(90, 'David Luiz', 'assets/images/Futbolistas/Futbolista-90.png', 30, '', 0, '', '', ''),
    new Futbolista(91, 'Sergio Ramos', 'assets/images/Futbolistas/Futbolista-91.png', 30, '', 0, '', '', ''),
    new Futbolista(94, 'Gerard Pique', 'assets/images/Futbolistas/Futbolista-94.png', 30, '', 0, '', '', ''),
    new Futbolista(106, 'David Alaba', 'assets/images/Futbolistas/Futbolista-106.png', 30, '', 0, '', '', ''),
    new Futbolista(116, 'Marcos Alonso', 'assets/images/Futbolistas/Futbolista-116.png', 30, '', 0, '', '', ''),
    new Futbolista(121, 'Marcelo Viera', 'assets/images/Futbolistas/Futbolista-121.png', 30, '', 0, '', '', ''),
    new Futbolista(123, 'Filipe Luis', 'assets/images/Futbolistas/Futbolista-123.png', 30, '', 0, '', '', ''),
    new Futbolista(127, 'Miralem Pjanic', 'assets/images/Futbolistas/Futbolista-127.png', 30, '', 0, '', '', ''),
    new Futbolista(133, 'Radja Nainggolan', 'assets/images/Futbolistas/Futbolista-133.png', 30, '', 0, '', '', ''),
    new Futbolista(135, 'Daniele De Rossi', 'assets/images/Futbolistas/Futbolista-135.png', 30, '', 0, '', '', ''),
    new Futbolista(136, 'Mario Gotze', 'assets/images/Futbolistas/Futbolista-136.png', 30, '', 0, '', '', ''),
    new Futbolista(146, 'Marco Verratti', 'assets/images/Futbolistas/Futbolista-146.png', 30, '', 0, '', '', ''),
    new Futbolista(157, 'Ngolo Kante', 'assets/images/Futbolistas/Futbolista-157.png', 30, '', 0, '', '', ''),
    new Futbolista(159, 'Christian Erikssen', 'assets/images/Futbolistas/Futbolista-159.png', 30, '', 0, '', '', ''),
    new Futbolista(160, 'Kevin De Bruyne', 'assets/images/Futbolistas/Futbolista-160.png', 30, '', 0, '', '', ''),
    new Futbolista(162, 'Paul Pogba', 'assets/images/Futbolistas/Futbolista-162.png', 30, '', 0, '', '', ''),
    new Futbolista(167, 'Luka Modric', 'assets/images/Futbolistas/Futbolista-167.png', 30, '', 0, '', '', ''),
    new Futbolista(171, 'Sergio Busquets', 'assets/images/Futbolistas/Futbolista-171.png', 30, '', 0, '', '', ''),
    new Futbolista(175, 'Arturo Vidal', 'assets/images/Futbolistas/Futbolista-175.png', 30, '', 0, '', '', ''),
    new Futbolista(185, 'Cristiano Ronaldo', 'assets/images/Futbolistas/Futbolista-185.png', 30, '', 0, '', '', ''),
    new Futbolista(191, 'Marco Reus', 'assets/images/Futbolistas/Futbolista-191.png', 30, '', 0, '', '', ''),
    new Futbolista(201, 'Robert Lewandowski', 'assets/images/Futbolistas/Futbolista-201.png', 30, '', 0, '', '', ''),
    new Futbolista(207, 'Neymar da Silva', 'assets/images/Futbolistas/Futbolista-207.png', 30, '', 0, '', '', ''),
    new Futbolista(208, 'Kylian Mbappe', 'assets/images/Futbolistas/Futbolista-208.png', 30, '', 0, '', '', ''),
    new Futbolista(223, 'Mohamed Salah', 'assets/images/Futbolistas/Futbolista-223.png', 30, '', 0, '', '', ''),
    new Futbolista(228, 'Eden Hazard', 'assets/images/Futbolistas/Futbolista-228.png', 30, '', 0, '', '', ''),
    new Futbolista(234, 'Harry Kane', 'assets/images/Futbolistas/Futbolista-234.png', 30, '', 0, '', '', ''),
    new Futbolista(236, 'Lionel Messi', 'assets/images/Futbolistas/Futbolista-236.png', 30, '', 0, '', '', ''),
    new Futbolista(238, 'Luis Suarez', 'assets/images/Futbolistas/Futbolista-238.png', 30, '', 0, '', '', ''),
    new Futbolista(242, 'Antoine Griezmann', 'assets/images/Futbolistas/Futbolista-242.png', 30, '', 0, '', '', ''),
    new Futbolista(244, 'Gareth Bale', 'assets/images/Futbolistas/Futbolista-244.png', 30, '', 0, '', '', '')
  ];
  constructor() { }

  getFutbolista(): Futbolista[] {
    return this.futbolistas.slice();
  }
}
