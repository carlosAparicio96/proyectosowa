import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import { RecetaService } from '../../services/receta.service';

@Component({
  selector: 'app-new-receta',
  templateUrl: './new-receta.page.html',
  styleUrls: ['./new-receta.page.scss'],
})
export class NewRecetaPage implements OnInit {

  constructor(private fb: FormBuilder,private recetaService:RecetaService, private router: Router) { }

  profileForm = this.fb.group({
    nombreRec: ['', Validators.required],
    tipoRec: ['', Validators.required],
    descripcion: ['', Validators.required]
  });

  async nuevaReceta(){
    console.log("intento de crear receta")

      var validar
      await this.recetaService.obtenerIng(validar).then(result => {
        
        validar= result
        console.log("ingredientes",result)
      })
  }



  ngOnInit() {
  }

}
