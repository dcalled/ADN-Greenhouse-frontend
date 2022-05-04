import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RegistroService } from './registro.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Registro } from '../model/registro';
import { HttpResponse } from '@angular/common/http';

describe('RegistroService', () => {
  let httpMock: HttpTestingController;
  let service: RegistroService;
  const apiEndpointRegistroConsulta = `${environment.endpoint}/tiposFamilia`;
  const apiEndpointRegistros = `${environment.endpoint}/registros`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegistroService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(RegistroService);
  });

  it('should be created', () => {
    const productService: RegistroService = TestBed.inject(RegistroService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar registros', () => {
    const dummyRegistros = [
      new Registro('1', 'Registro 1'), new Registro('2', 'Registro 2')
    ];
    service.consultar().subscribe(registros => {
      expect(registros.length).toBe(2);
      expect(registros).toEqual(dummyRegistros);
    });
    const req = httpMock.expectOne(apiEndpointRegistroConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRegistros);
  });

  it('deberia crear un registro', () => {
    const dummyRegistro = new Registro('1', 'Registro 1');
    service.guardar(dummyRegistro).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointRegistros);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un registro', () => {
    const dummyRegistro = new Registro('1', 'Registro 1');
    service.eliminar(dummyRegistro).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointRegistros}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
