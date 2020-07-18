import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import { RecetaService } from '../../services/receta.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-completar-receta',
  templateUrl: './completar-receta.page.html',
  styleUrls: ['./completar-receta.page.scss'],
})
export class CompletarRecetaPage implements OnInit {

  constructor( private fb: FormBuilder,private recetaService:RecetaService, private router: Router, 
               private ar: ActivatedRoute, private location: Location ) { }

  ingredientes
  ingDetalle: any = [];
  pasoDetalle: any = [];

  async ngOnInit() {
    await this.recetaService.obtenerIng().then(result => {

      this.ingredientes=result
    })
    console.log(this.ar.snapshot.params.id,this.ingredientes)
    this.addItemIngrediente(),
    this.addItemPasos()
  }

  selectIng =null

  insertData(){
    if(this.ingDetalle.length>0){
      for(var i=0;i<this.ingDetalle.length;i++){
        this.recetaService.completarIng(this.ingDetalle[i]).then(result => {
        })
      }
    }
    if(this.pasoDetalle.length>0){
      for (var i = 0; i < this.pasoDetalle.length; i++) {
        this.recetaService.completarPasos(this.pasoDetalle[i]).then(result => {
        })
      }
    }
    window.alert("Su receta está completa, la encontrara en su modulo de mis recetas")
    this.location.back();
    this.location.back();
  }
    //1--ingrediente--//
    addItemIngrediente() {
      let ingItem = {
        ingrediente: '',
        cantidad: '',
        id: new Date().getTime(),
        idReceta: this.ar.snapshot.params.id
      }
      this.ingDetalle.push(ingItem);
    }
    deleteItem(ing) {
      for (var i = 0; i < this.ingDetalle.length; i++) {
        if (ing.id == this.ingDetalle[i].id) {
          this.ingDetalle.splice(i, 1);
        }
      }
    }
  //--Pasos--//
    addItemPasos() {
      let pasoItem = {
        nPaso: '',
        descripcion: '',
        id: new Date().getTime(),
        idReceta: this.ar.snapshot.params.id
      }
      this.pasoDetalle.push(pasoItem);
    }
    deleteItemPaso(pas) {
      for (var i = 0; i < this.pasoDetalle.length; i++) {
        if (pas.id == this.pasoDetalle[i].id) {
          this.pasoDetalle.splice(i, 1);
        }
      }
    }

}
