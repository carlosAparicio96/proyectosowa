import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RecetaService } from '../../services/receta.service';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';

@Component({
  selector: 'app-new-receta',
  templateUrl: './new-receta.page.html',
  styleUrls: ['./new-receta.page.scss'],
})
export class NewRecetaPage implements OnInit {

  constructor(private fb: FormBuilder,private recetaService:RecetaService, private router: Router) { }

  profileForm = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    valoracion: ['', [Validators.required,Validators.email]], 
  });



  ngOnInit() {
  }

}
