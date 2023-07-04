import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  pensamento = {
    id: '1',
    conteudo: 'Mensagem',
    autoria: 'Autoria',
    modelo: 'modelo1'
  }

  constructor() {

  }

  ngOnInit(): void {

  }

  criarPensamento() {

  }

  cancelar() {
    
  }
}
