import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarRegistroComponent } from './listar-registro.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistroService } from '../../shared/service/registro.service';
import { Registro } from '../../shared/model/registro';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarRegistroComponent', () => {
  let component: ListarRegistroComponent;
  let fixture: ComponentFixture<ListarRegistroComponent>;
  let registroService: RegistroService;
  const listaRegistros: Registro[] = [new Registro('1', 'Registro 1'), new Registro('2', 'Registro 2')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarRegistroComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [RegistroService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRegistroComponent);
    component = fixture.componentInstance;
    registroService = TestBed.inject(RegistroService);
    spyOn(registroService, 'consultar').and.returnValue(
      of(listaRegistros)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaRegistros.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
