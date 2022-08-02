import { Component, OnInit} from '@angular/core';
import { CarroselImage } from 'src/app/componentes/carrosel-lancamento/carrosel-lancamento.component';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {
  

  images: CarroselImage[] = [
    {
      imageSrc: 'assets/imagens/computador.png',
      imageAlt: 'computador',
      description: 'Viajantes da imaginação são raridade',
      linklancamento:'Com preço imperdível. Se apresse',
      
      

    },
    {
      imageSrc: 'assets/imagens/headphoneslancamneto.jpg',
      imageAlt: 'headphoneslancamneto',
      description: 'Óculos 3D Realidade Virtual Com Headphone',
      linklancamento:'Com preço imperdível. Se apresse',



    },
    {
      imageSrc: 'assets/imagens/tab-game-pad-lancamneto.jpg',
      imageAlt: 'tab-game-pad-lancamneto',
      description: 'SControle Game Tablet Celular Android Ios',
      linklancamento:'Com preço imperdível. Se apresse',



    },

  ]
  
  constructor() { }
 


  ngOnInit(): void {
  }
  
  
}

