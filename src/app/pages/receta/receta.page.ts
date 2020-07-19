import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import { RecetaService } from '../../services/receta.service';
import {Location} from '@angular/common';
import { RecetaPageModule } from './receta.module';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  constructor(private recetaService:RecetaService, private router: Router, private ar: ActivatedRoute, private location: Location ) { }

  receta={
    nombreRec: "",
    tipoRec:"",
    descripcion:"",
    fotoRec:"",
    idUsuario:""
  };
  usuario={
    usuario:""
  };
  receta2 = [];
  pasos = [];
  ingrediente = [];
  idReceta = {idReceta: this.ar.snapshot.params.id};

  async ngOnInit() {
    await this.recetaService.getReceta(this.idReceta).then((result:any) => {
      
      this.receta = Object.assign(result[0])
      console.log("receta",this.receta)
    })
    
    await this.recetaService.getPasos(this.idReceta).then((result:any) => {
      for( var i=0; i < result.length ;i++){
        this.pasos.push(result[i].descripcion); 
      } 
    })
    await this.recetaService.getIngReceta(this.idReceta).then((result:any) => {
      for( var i=0; i < result.length ;i++){
      
        this.ingrediente.push(result[i]);
      } 

    })
    await this.recetaService.getReceta(this.idReceta).then((result:any) => {
      
      this.receta = Object.assign(result[0])
      console.log("receta",this.receta)
    })
    await this.recetaService.obetenerUsuario(this.receta).then((result:any) => {
      
      this.usuario = Object.assign(result[0])
      console.log("usuario",this.usuario)
    })
  }
}
            