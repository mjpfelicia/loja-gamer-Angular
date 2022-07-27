import { Component, OnInit,Input } from '@angular/core';
import { Tooltip } from 'bootstrap'



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
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(t => new Tooltip(t)) 
  }

}
