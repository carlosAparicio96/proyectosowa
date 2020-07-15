import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import { RecetaService } from '../../services/receta.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-ingrediente-despensa',
  templateUrl: './add-ingrediente-despensa.page.html',
  styleUrls: ['./add-ingrediente-despensa.page.scss'],
})
export class AddIngredienteDespensaPage implements OnInit {

  constructor( private fb: FormBuilder,private recetaService:RecetaService, private router: Router, 
    private ar: ActivatedRoute, private location: Location) { }

    ingredientes
    listaIngredientes: any = [];

  async ngOnInit() {
    await this.recetaService.obtenerIng().then(result => {

      this.ingredientes=result
    })
    console.log(this.ar.snapshot.params.id)
  }

  insertIngrediente(){
    if(this.listaIngredientes.length>0){
      for(var i=0;i<this.listaIngredientes.length;i++){
        this.recetaService.addIngDespensa(this.listaIngredientes[i]).then(result => {
        })
      }
    }
    alert("Ingrediente agregado a su despensa")
    this.location.back();
  }

  addItemIngrediente() {
    let ingItem = {
      ingrediente: '',   //esto debe ser el id del ingrediente
      cantidad: '',
      id: new Date().getTime(),
      idUsuario: this.ar.snapshot.params.id
    }
    this.listaIngredientes.push(ingItem); 
  }

  deleteItem(ing) {
    for (var i = 0; i < this.listaIngredientes.length; i++) {
      if (ing.id == this.listaIngredientes[i].id) {
        this.listaIngredientes.splice(i, 1);
      }
    }
  }
}
