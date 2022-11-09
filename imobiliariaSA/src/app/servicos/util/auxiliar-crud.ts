import { HttpClient} from "@angular/common/http";

import { Constantes} from "../../util/constantes";


export class AuxiliarCrud {

  constructor(
    public http: HttpClient
    , public constantes: Constantes,
    public entidade: string) {
  }

  async pesquisar (campos: any) {
    if (campos) {
      return await this.http.get(this.constantes.backUrlBase + "/" + this.entidade + "/pesquisar", campos).toPromise();
    }
    else {
      return await this.http.get(this.constantes.backUrlBase + "/" + this.entidade + "/pesquisar").toPromise();
    }
  }

  async adicionar (campos: any) {
    return await this.http.post(this.constantes.backUrlBase + "/" + this.entidade + "/adicionar", campos).toPromise();
  }

  async atualizar (campos: any) {
    return await this.http.put(this.constantes.backUrlBase + "/" + this.entidade + "/alterar", campos).toPromise();
  }

  async remover (campos: any) {
    return await this.http.delete(this.constantes.backUrlBase + "/" + this.entidade + "/excluir", campos).toPromise();
  }
}
