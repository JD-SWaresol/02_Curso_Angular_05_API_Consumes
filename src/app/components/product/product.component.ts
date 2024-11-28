import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  // Dentro del Constructor inyectamos el servicio
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    
  }

  // Generamos el metodo para traer todos los productos
  getProducts(){
    this.productService.getProducts().subscribe({
      // Aqui ocurren dos eventos: next(para capturar la informacion) y error (en caso de que se muestre algun error)

      next: (result) => {

      },
      error: (err) => {
        console.log(err);
      }

    });
  }

}
