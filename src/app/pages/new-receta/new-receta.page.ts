import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Routes, Params } from '@angular/router';
import { RecetaService } from '../../services/receta.service';

@Component({
  selector: 'app-new-receta',
  templateUrl: './new-receta.page.html',
  styleUrls: ['./new-receta.page.scss'],
})
export class NewRecetaPage implements OnInit {

  constructor(private fb: FormBuilder,private recetaService:RecetaService, private router: Router,
    private ar: ActivatedRoute) { }

  
  ngOnInit() {
  }

  profileForm = this.fb.group({
    nombreRec: ['', Validators.required],
    tipoRec: ['', Validators.required],
    descripcion: ['', Validators.required],
    idUsuario: this.ar.snapshot.params.id
  });

  async nuevaReceta(){
    console.log("intento de crear receta",this.profileForm.valid)
    if(this.profileForm.valid){
      var validar
      var idReceta
      var url
      await this.recetaService.crearReceta(this.profileForm.value).then(result => {
        console.log(result)
        validar= result
        idReceta=validar.insertId
        url=idReceta+"/completar-receta"

        if(validar.sucess==false){
          alert("La receta no se pudo crear")
        }
        else{
          alert("Receta creada")
          alert("Porfavor ingrese los ingredientes y los pasos a seguir de su receta")
          this.router.navigate([url])
        }
      })
      console.log("soy el validar de crear nueva receta ", validar)
    }
    else{
        alert("Falta rellenar algun campo")
    }
  }
}