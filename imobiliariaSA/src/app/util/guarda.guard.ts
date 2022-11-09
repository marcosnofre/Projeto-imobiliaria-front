import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';

import { AutenticacaoService } from "./../servicos/autenticacao.service";

@Injectable({
  providedIn: 'root'
})
export class GuardaGuard implements CanActivate {

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const usuario = this.autenticacaoService.currentUserValue;
    if (usuario) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
