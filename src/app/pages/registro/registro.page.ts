import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RecetaService } from '../../services/receta.service';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss']
})
export class RegistroPage implements OnInit {

  constructor(private fb: FormBuilder,private recetaService:RecetaService, private router: Router) { }

  profileForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    correo: ['', [Validators.required,Validators.email]],
    contrasena:['', Validators.required]
  });

  async insertUsuario(){
    console.log("intento de crear usaurio",this.profileForm.valid)
    if(this.profileForm.valid){

      var validar
      await this.recetaService.crearUsuario(this.profileForm.value).then(result => {
        
        validar= result
        if(validar.sucess==false){
          alert("El correo ingresado ya esta en uso")
        }
        else{
          alert("Usuario Creado")
          this.router.navigate(['/login'])
        }
      })
      console.log("soy el validar", validar)
    }
    else{
        alert("Falta rellenar algun campo")
    }

  }


  ngOnInit() {
  }

}
