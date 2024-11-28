import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  /* Creamos un metodo que nos permita obtener todos los productos guardados 
      1.- Primero obtenemos la URL del recurso que deseamos consumir
      2.- Generamo el metodo que retorne los productos 'getProduct()'
          -> El metodo es de tipo 'Observable' de tipo <any> para no retornar un modelo
          -> Retorna una consulta en base a la 'API_URL' y trae un resultado que  lo asigmna a 'res'.
  */
  API_URL: string = 'http://localhost:4200/assets/data/productos.json';

  constructor(private httpClient: HttpClient) { 
    /* 
      Como ya fue definido dentro de 'app.config.ts' como un provider, el constructor ya puede identificar 'HttpClient' dentro del servicio
    */


   }

   getProducts(): Observable<any>{
      return this.httpClient.get(this.API_URL).pipe(res => res);
   }

  

}
