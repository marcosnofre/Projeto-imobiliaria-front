import { Injectable } from '@angular/core';
import { AuxiliarCrud } from './util/auxiliar-crud';

// Componentes
import { HttpClient } from '@angular/common/http';

// Útil
import { Constantes } from 'src/app/util/constantes';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends AuxiliarCrud {

  constructor(public http: HttpClient, public constantes: Constantes) {
    super(http, constantes, 'categorias/');
  }
}
