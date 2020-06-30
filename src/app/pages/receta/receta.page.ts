import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  fotoReceta = [

    '../../assets/images/zorro.jpg',
    '../../assets/images/ojos.jpg',
    '../../assets/images/pelea.jpg',
    '../../assets/images/akatsuki.jpg',
 ];

 ingredientes = [

    '2 panes',
    '2 huevos',
    'cuchara de aceite',
    'pisca de sal',
    'manajar a gusto',
 ];

 pasos = [
  
    'pon el aceite en una sarten a fuego medio',
    'esperamos que caliente el aceite unos minutos y vermitos los huevos y la sal a gusto',
    'revoler con una cuchara de palo pa no rallar el maldito sarten',
    'cocer hasta obtener la contextura deseada',
    'mientras abre los panes :$ y en un tostador pon a calentar loh paneh pa mas placer',
    'chantale los huevos revueltos encima del pan',
    'sampale el manjar pa mucho mas placer',

 ]

  constructor() { }

  ngOnInit() {

    /* window.alert('juanca sacate unos dos de los mal malditos pal loco gaby') */
  }

}
