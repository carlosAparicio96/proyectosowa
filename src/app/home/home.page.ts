import { Component,OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { Router, ActivatedRoute, ParamMap, Routes, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ar:ActivatedRoute, private router: Router) {}

  idUs= this.ar.snapshot.params.id

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


}