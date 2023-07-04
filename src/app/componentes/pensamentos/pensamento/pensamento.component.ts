import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  @Input() pensamento = {
      conteudo: 'Aprendendo Angular 12',
      autoria: 'Emerson França',
      modelo: 'modelo2'
    }
}
