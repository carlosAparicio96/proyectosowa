import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import { RecetaService } from '../../services/receta.service';

@Component({
  selector: 'app-completar-receta',
  templateUrl: './completar-receta.page.html',
  styleUrls: ['./completar-receta.page.scss'],
})
export class CompletarRecetaPage implements OnInit {

  constructor( private fb: FormBuilder,private recetaService:RecetaService, private router: Router, private ar: ActivatedRoute ) { }

  ingredientes
  ingDetalle: any = [];
  pasoDetalle: any = [];
  todo={
    ing: this.ingDetalle,
    pas: this.pasoDetalle,
    id: this.ar.snapshot.params.id
  }

  async ngOnInit() {
    await this.recetaService.obtenerIng().then(result => {

      this.ingredientes=result
    })

    this.addItemIngrediente(),
    this.addItemPasos()
  }
  insertData(todo){
    this.recetaService.completarReceta(this.todo).then(result => {

    })
  }

    //--ingrediente--//
    addItemIngrediente() {
      let ingItem = {
        ingrediente: '',
        cantidad: '',
        id: new Date().getTime()
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
        paso: '',
        id: new Date().getTime()
      }
      this.pasoDetalle.push(pasoItem);
    }
    deleteItemPaso(paso) {
      for (var i = 0; i < this.pasoDetalle.length; i++) {
        if (paso.id == this.pasoDetalle[i].id) {
          this.pasoDetalle.splice(i, 1);
        }
      }
    }

}
