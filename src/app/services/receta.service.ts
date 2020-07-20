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

  obetenerUsuario (data) {
    console.log(data)

    return new Promise((resolve, reject) => {
      this.http.post(
        `${apiUrl}getUsuario`,
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

  allRecetas() {
    return new Promise((resolve, reject) => {
      this.http.get(
        `${apiUrl}getAllRecetas`
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
  
  misRecetas(data) {
    console.log(data)

    return new Promise((resolve, reject) => {
      this.http.post(
        `${apiUrl}getMisRecetas`,
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


  //--Despensa--//

  addIngDespensa(data) { // data = ingredietes (idUsuario, idIngred,cantidad)
    console.log(data)
  
    return new Promise((resolve, reject) => {
      this.http.post(
        `${apiUrl}addDespensa`,
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

  obtenerDespensa(idUsuario) { //data= id 
    console.log(idUsuario)
    return new Promise((resolve, reject) => {
      this.http.get(
        `${apiUrl}getIngredDespensa?idUsuario=${idUsuario}`
      )
        .subscribe(
          (response: any) => {
            try {
              
              resolve(response)
              console.log('Response Despensa', response, idUsuario)
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

  eliminarIngDespensa(data) { //data= id Usuario, id Ingrediente
    console.log("Service Eliminar Ing Receta",data)
  
    return new Promise((resolve, reject) => {
      this.http.post(
        `${apiUrl}deleteIngDesp`,
        data
      )
        .subscribe(
          (response: any) => {
            try {
              console.log('Response Service', response)
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

//--Carga datos para mostrar la receta--//

getReceta(data) { //data= id de receta
  console.log("Service get receta",data)

  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}getReceta`,
      data
    )
      .subscribe(
        (response: any) => {
          try {
            console.log('Response Service', response)
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

getPasos(data) { //data= id de receta
  console.log("Service get pasos",data)

  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}getPasos`,
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

getIngReceta(data) { //data= id de receta
  console.log("Service get ingredientes",data)

  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}getIngReceta`,
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

NombreUsuario(data) {// id del usuario == data
  console.log(data)

  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}BuscarNombreUsuario`,
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


  
}







