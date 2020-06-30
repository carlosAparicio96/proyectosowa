import { Component,OnInit } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fotitos = [

     '../../assets/images/zorro.jpg',
     '../../assets/images/ojos.jpg',
     '../../assets/images/pelea.jpg',
     '../../assets/images/akatsuki.jpg',
  ];

  constructor() {}

}