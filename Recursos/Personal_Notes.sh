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