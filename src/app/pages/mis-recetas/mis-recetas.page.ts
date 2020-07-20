import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import { RecetaService } from '../../services/receta.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-mis-recetas',
  templateUrl: './mis-recetas.page.html',
  styleUrls: ['./mis-recetas.page.scss'],
})
export class MisRecetasPage implements OnInit {

  constructor(private recetaService:RecetaService, private router: Router, private ar: ActivatedRoute, private location: Location ) { }

  id={idUsuario: this.ar.snapshot.params.id}
  receta=[];

  async ngOnInit() {
    await this.recetaService.misRecetas(this.id).then((result:any) => {
      
      for(var i =0; i< result.length;i++){

        this.receta.push(result[i])
      }
      console.log("receta",this.receta) 
      console.log(this.id)
    })
  }
  
}
