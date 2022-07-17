import { InputModalityDetector } from '@angular/cdk/a11y';
import { Component, Input, OnInit } from '@angular/core';

export interface CardProduto {
  detalhe: string;
  imageSrc: string;
  title: string;
  precoSemDescont: number;
  precoComDescont: number;
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() produto: CardProduto ={
    detalhe: '',
    imageSrc: '',
    title: '',
    precoSemDescont: 0,
    precoComDescont: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}

