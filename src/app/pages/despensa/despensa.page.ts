import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import { RecetaService } from '../../services/receta.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-despensa',
  templateUrl: './despensa.page.html',
  styleUrls: ['./despensa.page.scss'],
})
export class DespensaPage implements OnInit {

  constructor(private fb: FormBuilder,private recetaService:RecetaService, private router: Router, 
    private ar: ActivatedRoute, private location: Location) { }

  idUsuario = this.ar.snapshot.params.id;
  despensa;

  async ngOnInit() {
    await this.recetaService.obtenerDespensa(this.idUsuario).then(result => {

      this.despensa=result;
    });
    console.log(this.ar.snapshot.params.id, this.despensa)
  }

  addIngredientesDespensa(){
    var url=this.idUsuario+'/add-ingrediente-despensa'
    this.router.navigate([url])
  }

}
