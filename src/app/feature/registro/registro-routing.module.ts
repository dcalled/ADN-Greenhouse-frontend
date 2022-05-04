import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { ListarRegistroComponent } from './components/listar-registro/listar-registro.component';
import { BorrarRegistroComponent } from './components/borrar-registro/borrar-registro.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  {
    path: '',
    component: RegistroComponent,
    children: [
      {
        path: 'crear',
        component: CrearRegistroComponent
      },
      {
        path: 'listar',
        component: ListarRegistroComponent
      },
      {
        path: 'borrar',
        component: BorrarRegistroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
