import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  componentes: componente[] = [
    {
      icon: 'logo-react',
      name: 'Iniciar Sesion',
      redirectTo: '/registro'
    },
    {
      icon: 'logo-playstation',
      name: 'Registrarse',
      redirectTo: '/registro'
    }


  ];

  constructor() { }

  ngOnInit() {
  }

}

interface componente {
  icon: string;
  name: string;
  redirectTo: string;
}