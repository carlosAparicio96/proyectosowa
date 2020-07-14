import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "http://localhost:3000/usuario/"

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private http: HttpClient) { }
  
//--USUARIO--//
  crearUsuario(data) {
    console.log(data)

    return new Promise((resolve, reject) => {
      this.http.post(
        `${apiUrl}registro`,
        data
      )
        .subscribe(
          (response: any) => {
            try {
              console.log('response', response)
              resolve(response)
            } catch (error) {
              console.log('error1', error)
              reject(error)
            }
          },
          error => {
            console.log('error2', error)
            reject(error)
          }
        )
    })
  }

  iniciarSesion(data) {
    console.log(data)

    return new Promise((resolve, reject) => {
      this.http.post(
        `${apiUrl}iniciar`,
        data
      )
        .subscribe(
          (response: any) => {
            try {
              console.log('response', response)
              resolve(response)
            } catch (error) {
              console.log('error1', error)
              reject(error)
            }
          },
          error => {
            console.log('error2', error)
            reject(error)
          }
        )
    })
  }

  //--RECETAS--//

  crearReceta(data) {
    console.log(data)

    return new Promise((resolve, reject) => {
      this.http.post(
        `${apiUrl}receta`,
        data
      )
        .subscribe(
          (response: any) => {
            try {
              console.log('Response', response)
              resolve(response)
            } catch (error) {
              console.log('error1', error)
              reject(error)
            }
          },
          error => {
            console.log('error2', error)
            reject(error)
          }
        )
    })
  }

  completarIng(data) {
    console.log(data)

    return new Promise((resolve, reject) => {
      this.http.post(
        `${apiUrl}terminarIng`,
        data
      )
        .subscribe(
          (response: any) => {
            try {
              console.log('Response', response)
              resolve(response)
            } catch (error) {
              console.log('error1', error)
              reject(error)
            }
          },
          error => {
            console.log('error2', error)
            reject(error)
          }
        )
    })
  }

completarPasos(data) {
    console.log(data)

    return new Promise((resolve, reject) => {
      this.http.post(
        `${apiUrl}terminarPasos`,
        data
      )
        .subscribe(
          (response: any) => {
            try {
              console.log('Response', response)
              resolve(response)
            } catch (error) {
              console.log('error1', error)
              reject(error)
            }
          },
          error => {
            console.log('error2', error)
            reject(error)
          }
        )
    })
  }


  

  obtenerIng() {
    return new Promise((resolve, reject) => {
      this.http.get(
        `${apiUrl}obtenerIng`
      )
        .subscribe(
          (response: any) => {
            try {
              console.log('response', response)
              resolve(response)
            } catch (error) {
              console.log('error1', error)
              reject(error)
            }
          },
          error => {
            console.log('error2', error)
            reject(error)
          }
        )
    })
  }
  
}


