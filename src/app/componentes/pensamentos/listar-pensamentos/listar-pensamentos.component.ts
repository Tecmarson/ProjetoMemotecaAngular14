import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {
  listaPensamentos = [
    {
      conteudo: 'Desenvolvedor Angular',
      autoria: 'Emerson Silva',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Desenvolvedor Angular',
      autoria: 'Emerson Silva',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Desenvolvedor Angular',
      autoria: 'Emerson Silva',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Desenvolvedor Angular',
      autoria: 'Emerson Silva',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Desenvolvedor Angular',
      autoria: 'Emerson Silva',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Desenvolvedor Angular',
      autoria: 'Emerson Silva',
      modelo: 'modelo3'
    }
  ];
}
