import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import { RecetaService } from '../../services/receta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private recetaService:RecetaService) { }

  profileForm = this.fb.group({
    correo: ['', [Validators.required,Validators.email]],
    contrasena:['', Validators.required]
  });

  async login(){
    console.log("inicio de sesion",this.profileForm.valid)
    if(this.profileForm.valid){

      var validar
      await this.recetaService.iniciarSesion(this.profileForm.value).then(result => {
        
        validar= result
        if(validar.length != 0){
          var id=result[0].id
          var url=id+"/home"
          this.router.navigate([url])
        }
        else{
          alert("el correo o contraseña invalido")
        }
      })
      console.log("soy el validar", validar)
    }
    else{
        alert("Falta rellenar algun campo")
    }

  }






  
  componentes: componente[] = [
    {
      icon: 'logo-react',
      name: 'Iniciar Sesion',
      redirectTo: '/login'
    },
    {
      icon: 'logo-playstation',
      name: 'Registrarse',
      redirectTo: '/registro'
    }


  ];



 

  ngOnInit() {
  }

}

interface componente {
  icon: string;
  name: string;
  redirectTo: string;
}