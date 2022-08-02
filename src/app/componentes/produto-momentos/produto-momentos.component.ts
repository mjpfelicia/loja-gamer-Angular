import { Component, OnInit } from '@angular/core';
import { CardProduto } from '../cardqueridinhos/cardqueridinhos.component';

@Component({
  selector: 'app-produto-momentos',
  templateUrl: './produto-momentos.component.html',
  styleUrls: ['./produto-momentos.component.css']
})
export class ProdutoMomentosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  produtos: CardProduto[] = [{
    imageSrc: 'assets/imagens/maquinafotografica.jpg',
    title: 'CÂMERA CANON EOS REBEL T100 COM LENTE',
    precoSemDescont: 4100,
    precoComDescont: 1.249,
    precoParcelado: 41

  },
  {
    imageSrc: 'assets/imagens/foneRosa.jpg',
    title: 'HEADSET GAMER REDRAGON, RGB, DRIVERS 50MM,ROSA',
    precoSemDescont: 488,
    precoComDescont: 139,
    precoParcelado: 488


  },
  {
    imageSrc: 'assets/imagens/cadeira-gamer.jpg',
    title: 'CADEIRA GAMER ,PRETA E AZUL PG-TAU-RED01',
    precoSemDescont: 2.272,
    precoComDescont: 1.249,
    precoParcelado: 227

  },
  {
    imageSrc: 'assets//imagens/code.jpg',
    title: 'PROCESSADOR INTEL CORE I9-12900, 16-CORE,24-THREADS',
    precoSemDescont: 4.886,
    precoComDescont: 3.599,
    precoParcelado: 488

  },
  {
    imageSrc: 'assets/imagens/cadeira-gamer.jpg',
    title: 'CADEIRA GAMER ,PRETA E AZUL PG-TAU-RED01',
    precoSemDescont: 2.272,
    precoComDescont: 1.249,
    precoParcelado: 227

  },
  {
    imageSrc: 'assets/imagens/maquinafotografica.jpg',
    title: 'CÂMERA CANON EOS REBEL T100 COM LENTE',
    precoSemDescont: 4100,
    precoComDescont: 31900,
    precoParcelado: 100

  },
  {
    imageSrc: 'assets//imagens/code.jpg',
    title: 'PROCESSADOR INTEL CORE I9-12900, 16-CORE,24-THREADS',
    precoSemDescont: 4.886,
    precoComDescont: 3.599,
    precoParcelado: 86

  },
  {
    imageSrc: 'assets/imagens/foneRosa.jpg',
    title: 'HEADSET GAMER REDRAGON, RGB, DRIVERS 50MM,ROSA',
    precoSemDescont: 488,
    precoComDescont: 139,
    precoParcelado: 48

  },
  ]

}
