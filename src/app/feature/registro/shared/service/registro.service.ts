import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Registro } from '../model/registro';


@Injectable()
export class RegistroService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Registro[]>(`${environment.endpoint}/registros`, this.http.optsName('consultar registros'))
    .pipe(map(regs => regs.map(reg => {
      let estado = 'Semilla';
      const hoy = new Date();
      if (hoy.getTime() > new Date(reg.fechaReproduccion).getTime()) {
        estado = 'Reproducción';
      } else if (hoy.getTime() > new Date(reg.fechaMacollamiento).getTime()) {
        estado = 'Macollamiento';
      } else if (hoy.getTime() > new Date(reg.fechaPlantula).getTime()) {
        estado = 'Plántula';
      } else if (hoy.getTime() > new Date(reg.fechaGerminacion).getTime()) {
        estado = 'Germinación';
      }
      reg.estado = estado;
      return reg;
    })));
  }

  public guardar(registro: Registro) {
    return this.http.doPost<Registro, any>(`${environment.endpoint}/registros`, registro,
                                                this.http.optsName('crear/actualizar registros'));
  }

  public eliminar(registro: Registro) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/registros/${registro.id}`,
                                                 this.http.optsName('eliminar registros'));
  }
}
