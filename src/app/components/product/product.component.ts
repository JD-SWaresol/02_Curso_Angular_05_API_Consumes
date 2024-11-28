import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  // Esta variable se va a usar para la renderizacion de los campos de una manera mas limpia. Inicializa en Blanco
  productList: ProductInterface[]=[];

  // Dentro del Constructor inyectamos el servicio
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProducts();
  }

  // Generamos el metodo para traer todos los productos
  getProducts(){
    this.productService.getProducts().subscribe({
      // Aqui ocurren dos eventos: next(para capturar la informacion) y error (en caso de que se muestre algun error)

      next: (result) => {
        this.productList = result.productos;
      },
      error: (err) => {
        console.log(err);
      }

    });
  }

}
