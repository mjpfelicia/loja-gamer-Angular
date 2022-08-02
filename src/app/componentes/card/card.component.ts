import { InputModalityDetector } from '@angular/cdk/a11y';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tooltip } from 'bootstrap'

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

  @Input()produto?: CardProduto

  constructor() { }

  ngOnInit(): void {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(t => new Tooltip(t)) 
  }

  
}

