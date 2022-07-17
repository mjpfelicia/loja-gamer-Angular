import { Component, OnInit } from '@angular/core';
import { CardProduto } from 'src/app/card/card.component';


@Component({
  selector: 'app-produtos-ofertas',
  templateUrl: './produtos-ofertas.component.html',
  styleUrls: ['./produtos-ofertas.component.css']
})
export class ProdutosOfertasComponent implements OnInit {

  constructor() { }
  produtos: CardProduto[] = [{
    detalhe: '-10%',
    imageSrc: 'assets/imagens/maquinafotografica.jpg',
    title: 'CÂMERA CANON EOS REBEL T100 COM LENTE',
    precoSemDescont: 4100,
    precoComDescont: 31900,

  },
  {
    detalhe: '-20%',
    imageSrc: 'assets/imagens/foneRosa.jpg',
    title: 'HEADSET GAMER REDRAGON, RGB, DRIVERS 50MM,ROSA',
    precoSemDescont: 488,
    precoComDescont: 139,

  },
  {
    detalhe: '-22%',
    imageSrc: 'assets/imagens/cadeira-gamer.jpg',
    title: 'CADEIRA GAMER ,PRETA E AZUL PG-TAU-RED01',
    precoSemDescont: 2.272,
    precoComDescont: 1.249,

  },
  {
    detalhe: '-10%',
    imageSrc: 'assets//imagens/code.jpg',
    title: 'PROCESSADOR INTEL CORE I9-12900, 16-CORE,24-THREADS',
    precoSemDescont: 4.886,
    precoComDescont: 3.599,

  },
  {
    detalhe: '-22%',
    imageSrc: 'assets/imagens/cadeira-gamer.jpg',
    title: 'CADEIRA GAMER ,PRETA E AZUL PG-TAU-RED01',
    precoSemDescont: 2.272,
    precoComDescont: 1.249,

  },
  {
    detalhe: '-10%',
    imageSrc: 'assets/imagens/maquinafotografica.jpg',
    title: 'CÂMERA CANON EOS REBEL T100 COM LENTE',
    precoSemDescont: 4100,
    precoComDescont: 31900,

  },
  {
    detalhe: '-10%',
    imageSrc: 'assets//imagens/code.jpg',
    title: 'PROCESSADOR INTEL CORE I9-12900, 16-CORE,24-THREADS',
    precoSemDescont: 4.886,
    precoComDescont: 3.599,

  },
  {
    detalhe: '-20%',
    imageSrc: 'assets/imagens/foneRosa.jpg',
    title: 'HEADSET GAMER REDRAGON, RGB, DRIVERS 50MM,ROSA',
    precoSemDescont: 488,
    precoComDescont: 139,

  },
  ]

  ngOnInit(): void {
  }

}
