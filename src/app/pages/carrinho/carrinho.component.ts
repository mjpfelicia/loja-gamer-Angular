import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { CardProduto } from 'src/app/componentes/card/card.component';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {


  produtos:CardProduto[] = []

  constructor() { }

  ngOnInit(): void {

  }



}
