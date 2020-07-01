import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RecetaService } from '../../services/receta.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss']
})
export class RegistroPage implements OnInit {

  constructor(private fb: FormBuilder,private recetaService:RecetaService) { }

  profileForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    correo: ['', [Validators.required,Validators.email]],
    contrasena:['', Validators.required]
  });

  pico(){
    console.log("pico pal edi",this.profileForm.valid)
    if(this.profileForm.valid){
      this.recetaService.crearUsuario(this.profileForm.value)
    }
    else{
        alert("Falta rellenar algun campo")
    }

  }

  ngOnInit() {
  }

}
