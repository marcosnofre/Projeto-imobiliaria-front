import { Component, OnInit } from '@angular/core';

// Serviços
import { ImoveisService } from 'src/app/servicos/imoveis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private imoveisService: ImoveisService) { }

  public imoveis: [] = [];

  ngOnInit(): void {
    this.pesquisarImoveis();
  }

  async pesquisarImoveis() {
    await this.imoveisService.pesquisar().then( async (retorno: []) => {
      this.imoveis = retorno;
    });
  }

}
