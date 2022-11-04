import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constantes } from './../util/constantes';
import { AuxiliarCrud } from './util/auxiliar-crud';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService extends AuxiliarCrud {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(public http: HttpClient, public override constantes: Constantes) {
    super(http, constantes, 'login');
    if (localStorage.getItem('usuario') != 'undefined') {
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('usuario')));
    }
    else {
        this.currentUserSubject = new BehaviorSubject<any>(null);
    }
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public get currentUserObject(): BehaviorSubject<any> {
    return this.currentUserSubject;
  }

  async login(campos: any) {
      return await this.http.post<any[]>(this.constantes.backUrlBase + 'login/'
          ,   campos).toPromise().then(user => {
            localStorage.setItem('usuario', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
          });
  }

}
