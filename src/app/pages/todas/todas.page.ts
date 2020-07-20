import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import { RecetaService } from '../../services/receta.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-todas',
  templateUrl: './todas.page.html',
  styleUrls: ['./todas.page.scss'],
})
export class TodasPage implements OnInit {

  constructor(private recetaService:RecetaService, private router: Router, private ar: ActivatedRoute, private location: Location ) { }

  receta=[];

  async ngOnInit() {
    await this.recetaService.allRecetas().then((result:any) => {
      
      for(var i =0; i< result.length;i++){

        this.receta.push(result[i])
      }
      console.log("receta",this.receta) 
    })
  }
  
}
