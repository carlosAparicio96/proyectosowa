import { Component,OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { Router, ActivatedRoute, ParamMap, Routes, Params } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { MethodCall } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  idUs= this.ar.snapshot.params.id 
  menu: any;
  


  constructor(private ar:ActivatedRoute, private router: Router) {}
  
  
  miDespensa(){
    var url=this.idUs+'/despensa'
    this.router.navigate([url])
  }
  misRecetas(){
    var url=this.idUs+'/mis-recetas'
    this.router.navigate([url])
  }

  crearReceta(){
    var url=this.idUs+'/new-receta'
    this.router.navigate([url])
  }

  explorar(){
    var url=this.idUs+'/todas'
    this.router.navigate([url])
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}