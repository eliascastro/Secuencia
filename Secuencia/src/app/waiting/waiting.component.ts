import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Jugador {
  nombre: string;
  equipo: string;
}

const ELEMENT_DATA: Jugador[] = [
  {nombre: 'Eliitas', equipo: 'azul'},
  {nombre: 'Gina', equipo: 'azul'},
  {nombre: 'Elias', equipo: 'rojo'},
];

@Component({
  selector: 'secuencia-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'equipo'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  iniciaJuego() {
    this.router.navigate(['game']);
  }

}
