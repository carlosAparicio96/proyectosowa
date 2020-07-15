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

  idUs= this.ar.snapshot.params.id 

  ngOnInit() {
  }

  addIngredientesDespensa(){
    var url=this.idUs+'/add-ingrediente-despensa'
    this.router.navigate([url])
  }

}
