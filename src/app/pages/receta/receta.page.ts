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

  receta: any[];
  pasos: any[];
  ingredientes:any[];
  data = {idReceta: this.ar.snapshot.params.id}

  async ngOnInit() {

    console.log("antes de mandar la data",this.data)
    await this.recetaService.getReceta(this.data).then(result => {

      this.receta.push(result);
      console.log("despues de mandar la data",this.receta)
    })
    
     await this.recetaService.getPasos(this.data).then(result => {

      this.pasos.push(result);
      console.log(this.pasos)
    })
    await this.recetaService.getIngReceta(this.data).then(result => {

      this.ingredientes.push(result);
      console.log(this.ingredientes)
    })  
  }
}
