import { Component, OnInit,Input } from '@angular/core';


export interface CardProduto {
  imageSrc: string;
  title: string;
  precoSemDescont: number;
  precoComDescont: number;
  precoParcelado: number;

}


@Component({
  selector: 'app-cardqueridinhos',
  templateUrl: './cardqueridinhos.component.html',
  styleUrls: ['./cardqueridinhos.component.css']
})
export class CardqueridinhosComponent implements OnInit {

  @Input() produto: CardProduto ={
    imageSrc: '',
    title: '',
    precoSemDescont: 0,
    precoComDescont: 0,
    precoParcelado: 0,

  };

  constructor() { }

  ngOnInit(): void {
  }

}
