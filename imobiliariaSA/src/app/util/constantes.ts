import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable()
export class Constantes {

  readonly backUrlBase = environment.apiUrl;
}
