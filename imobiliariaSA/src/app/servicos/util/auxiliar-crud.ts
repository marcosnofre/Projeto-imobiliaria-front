// Componentes
import { HttpClient } from '@angular/common/http';

// Útil
import { Constantes } from 'src/app/util/constantes';

export class AuxiliarCrud {

  constructor(public http: HttpClient, public constantes: Constantes, public entidade: string){}

  async pesquisar(id?: number) {
    if (id) {
      return await this.http.get<any[]>(this.constantes.backUrlBase + this.entidade + id + '/').toPromise();
    }
    else {
      return await this.http.get<any[]>(this.constantes.backUrlBase +
        this.entidade).toPromise();
    }
  }

  async adicionar(campos: any) {
    return await this.http.post<any[]>(this.constantes.backUrlBase + this.entidade
      ,   campos).toPromise();
  }

  async atualizar(campos: any) {
    return await this.http.patch<any[]>(this.constantes.backUrlBase + this.entidade + campos.id + '/'
      ,   campos).toPromise();
  }

  async remover(id: number) {
    return await this.http.delete<any[]>(this.constantes.backUrlBase + this.entidade + id + '/').toPromise();
  }

}
