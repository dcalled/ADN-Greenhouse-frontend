import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../shared/service/registro.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.scss']
})
export class CrearRegistroComponent implements OnInit {
  registroForm: FormGroup;
  constructor(protected registroServices: RegistroService) { }

  ngOnInit() {
    this.construirFormularioRegistro();
  }

  crear() {
    this.registroServices.guardar(this.registroForm.value).forEach(v => alert(`Creación existosa${v.valor}`));
  }

  private construirFormularioRegistro() {
    this.registroForm = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      valorBase: new FormControl(null, [Validators.required]),
      tiempoVegetacion: new FormControl(null, [Validators.required]),
      fechaGerminacion: new FormControl(null, [Validators.required]),
    });
  }

}
