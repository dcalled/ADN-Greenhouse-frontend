import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearRegistroComponent } from './crear-registro.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistroService } from '../../shared/service/registro.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearRegistroComponent', () => {
  let component: CrearRegistroComponent;
  let fixture: ComponentFixture<CrearRegistroComponent>;
  let registroService: RegistroService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRegistroComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [RegistroService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRegistroComponent);
    component = fixture.componentInstance;
    registroService = TestBed.inject(RegistroService);
    spyOn(registroService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.registroForm.valid).toBeFalsy();
  });

  it('Registrando registro', () => {
    expect(component.registroForm.valid).toBeFalsy();
    component.registroForm.controls.id.setValue('001');
    component.registroForm.controls.descripcion.setValue('Registro test');
    expect(component.registroForm.valid).toBeTruthy();

    component.cerar();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
