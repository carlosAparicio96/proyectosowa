import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import {Location} from '@angular/common';
import { RecetaService } from 'src/app/services/receta.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  titulos ="Usuario"; // Nombre de la  cabecera

  NombreUsuario ;
  CorreoUsuario ;
  PasswordUsuario ;
  datos = this.fb.group({
    nombreUsr: '' ,
    idUsuario: Number(this.ar.snapshot.params.id)
  });
  id =this.fb.group({
    idUsuario: Number(this.ar.snapshot.params.id)
  });

  
  constructor(private fb: FormBuilder,private recetaService:RecetaService, public alertCtr: AlertController,private router: Router, private ar: ActivatedRoute, private location: Location) {
    this.recetaService.NombreUsuario(this.id.value).then((result:any) => {this.NombreUsuario=(result[0].nombreUsr);})
    this.recetaService.CorreoUsuario(this.id.value).then((result:any) => {this.CorreoUsuario=(result[0].correo);})
    this.recetaService.PasswordUsuario(this.id.value).then((result:any) => {this.PasswordUsuario=(result[0].password);})
  }
// Alerta con 1 input ----------------------------------------
  async alerInputUsuario(){
    const alertInp = await this.alertCtr.create({
      header: this.NombreUsuario,
      subHeader: "cambiar nombre" ,
      inputs: [
        {
          name: 'InputUsuario',
          type: 'text',
          placeholder: 'variableAux'
        }
      ],      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Ok',
          handler: ( data ) => {
            console.log('Confirm Cancel:', data);
            this.datos.value.nombreUsr = data.InputUsuario;
            var result =this.recetaService.ModificarNombredUsuario(this.datos.value);
            this.NombreUsuario=(result[0].nombreUsr);
          }
        }
      ]
    })
    await alertInp.present();
  }
  // --------------------------------------------

  // Alerta con 1 input ----------------------------------
  async alerInputCorreo(){
    const alertInp = await this.alertCtr.create({
      header: this.CorreoUsuario,
      subHeader: "cambiar correo" ,
      inputs: [
        {
          name: 'InputCorreo',
          type: 'email',
          placeholder: 'Correo'
        }
      ],      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Ok',
          handler: ( data ) => {
            console.log('Confirm Cancel:', data);
            this.CorreoUsuario = data.InputCorreo;
          }
        }
      ]
    })
    await alertInp.present();
  }
  // ---------------------------------------

  // Alerta con 2 input y confimacion de contraseña
  async alerInputPassword(){
    const alertInp = await this.alertCtr.create({
      header: this.PasswordUsuario,
      subHeader: "cambiar Password" ,
      inputs: [
        {
          name: 'InputAntiguaPass',
          type: 'password',
          placeholder: 'Antigua Password',
          
        },
        {
          name: 'InputNuevaPass',
          type: 'password',
          placeholder: 'Nueva Password'
        },
        {
          name: 'InputNuevaPassRep',
          type: 'password',
          placeholder: 'Repita Password'
        }
      ],      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Ok',
          handler: ( data ) => {
            console.log('Confirm Cancel:', data); // Comfirma si las contraseña nueva son iguales y conoce la antigua contraseña
            if (this.CompararString(data.InputNuevaPassRep,data.InputNuevaPass) && this.CompararString(data.InputAntiguaPass,this.PasswordUsuario)){
              this.PasswordUsuario = data.InputNuevaPass;
            }
          }
        }
      ]
    })
    await alertInp.present();
  }
  //---------------------------------------------
  // Compara 2 string y regresa si es verdadero o falso
  CompararString(TextoNum1 : String, TextoNum2 : String){
    return TextoNum1 === TextoNum2;
  } 
  ////////////////////////////////////////////
  ngOnInit() {}
}
