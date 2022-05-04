import { NgModule } from '@angular/core';

import { RegistroRoutingModule } from './registro-routing.module';
import { BorrarRegistroComponent } from './components/borrar-registro/borrar-registro.component';
import { ListarRegistroComponent } from './components/listar-registro/listar-registro.component';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SharedModule } from '@shared/shared.module';
import { RegistroService } from './shared/service/registro.service';


@NgModule({
  declarations: [
    CrearRegistroComponent,
    ListarRegistroComponent,
    BorrarRegistroComponent,
    RegistroComponent
  ],
  imports: [
    RegistroRoutingModule,
    SharedModule
  ],
  providers: [RegistroService]
})
export class RegistroModule { }
