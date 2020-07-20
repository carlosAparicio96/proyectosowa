import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import {Location} from '@angular/common';
import { RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  titulos ="UsuarioN"; // Nombre de la  cabecera

  Usuario ="NombreU";
  NombreUsuario;
  variable3 = "Correo";
  variable4 = "pass";
  id =this.ar.snapshot.params.id;
  constructor(private recetaService:RecetaService, public alertCtr: AlertController,private router: Router, private ar: ActivatedRoute, private location: Location) {
    this.NombreUsuario = this.recetaService.NombreUsuario(this.id).then((result:any) => {(result);})}

  
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
            this.NombreUsuario = data.InputUsuario;
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
      header: this.variable3,
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
            this.variable3 = data.InputCorreo;
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
      header: this.variable4,
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
            if (this.CompararString(data.InputNuevaPassRep,data.InputNuevaPass) && this.CompararString(data.InputAntiguaPass,this.variable4)){
              this.variable4 = data.InputNuevaPass;
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
