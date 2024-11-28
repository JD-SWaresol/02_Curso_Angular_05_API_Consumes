import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./components/product/product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // Aqui nosotros podemos importar directamente 'PorductComponent' sin necesidad de importarlo a 'app.module.ts' ya que 'app.component.ts' y 'product.component.ts' 
  // estan en un standalone de tipo true
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '05_API_Consume_ng-app-products';
}
