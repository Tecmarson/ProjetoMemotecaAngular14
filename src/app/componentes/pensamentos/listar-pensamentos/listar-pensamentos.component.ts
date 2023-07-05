import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {
  listaPensamentos = [
    {
      conteudo: 'printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,printer took a galley of type',
      autoria: 'Emerson Silva',
      modelo: 'modelo1'
    },
    {
      conteudo: 'xt ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanIpsum.',
      autoria: 'Emerson Silva',
      modelo: 'modelo2'
    },
    {
      conteudo: 'printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,printer took a galley of type ',
      autoria: 'Emerson Silva',
      modelo: 'modelo3'
    },
    {
      conteudo: 'printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
      autoria: 'Emerson Silva',
      modelo: 'modelo1'
    }
  ];
}
