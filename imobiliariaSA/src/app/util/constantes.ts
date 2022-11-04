import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class Constantes {

    readonly backUrlBase = environment.apiUrl;
}
