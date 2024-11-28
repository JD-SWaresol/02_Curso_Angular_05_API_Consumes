////// Observaciones

+ A difrerencia de las versiones anteriores de Angular 17, podemos observar que angular nos proporciona dos archivos adicionales, los cuales son:

    - app.config.ts : 

    - app.routes.ts : Estaba presente en versiones anteriores pero se usaba como un modulo.


~/src/main.ts

+ Archivo para mapear que componente se va a inicializar en la aplicacion. (Se hace mas directo)


~/src/app.component.ts

+ Angular 17 tiene un ' standalone : true ' ya que con esto ya no seria necesario inyectar los components creados dentro de 'app.module.ts'

    import { Component } from '@angular/core';
    import { RouterOutlet } from '@angular/router';

    @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],


+ HttpClientModule : Es usado para consumir servicios, esta presente para inyectores multiples. Sin embargo el comportamiento de los interceptores NO esta bien definido, 
    depende de opciones exactas y de la orden de provider/import

+ provideHttpClient: Es usado para configuraciones multiyector, pues tiene un comportamiento mas estable.


+ Observables: Se usan como una interface para el manejo de una variedad comun de operaciones asincornas. Ejemplo:
    * Los modulos HTTP usan 'Observables' para el manejo de peticiones y respuestas AJAX-
    * Los modulos Router y FORMS usan 'Observables' para escuhar y responder los eventos de entradas de usuario.



~/src/interfaces/product.interface.ts

+ Se usa para renderizar la información de los productos de una manera mas limpia