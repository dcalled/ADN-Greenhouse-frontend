import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RegistroService } from '@registro/shared/service/registro.service';
import { Registro } from '@registro/shared/model/registro';

@Component({
  selector: 'app-listar-registro',
  templateUrl: './listar-registro.component.html',
  styleUrls: ['./listar-registro.component.scss']
})
export class ListarRegistroComponent implements OnInit {
  public listaRegistros: Observable<Registro[]>;

  constructor(protected registroService: RegistroService) { }

  ngOnInit() {
    this.listaRegistros = this.registroService.consultar();
  }

  eliminar(registro: Registro) {
    this.registroService.eliminar(registro).subscribe(c => console.log(c));
    this.ngOnInit();
  }

  vender(registro: Registro) {
    alert('vendiendo registro');
    console.log(registro);
  }

}
