import { Component, OnInit } from '@angular/core';
import { CarroselImage } from 'src/app/Component /carousel/carrosel.component';

@Component({
  selector: 'app-banner-principal',
  templateUrl: './banner-principal.component.html',
  styleUrls: ['./banner-principal.component.css']
})
export class BannerPrincipalComponent implements OnInit {
  
  images: CarroselImage[] = [
    {
      imageSrc: 'assets/imagens/banner3.png',
      imageAlt: 'banner3',
      description: 'Escolha cada componente e monte o computador dos seus sonhos!'

    },
    {
      imageSrc: 'assets/imagens/banner2.jpg',
      imageAlt: 'banner2',
      description: 'Falta pouco para acabar o estoque. Não fique de fora dessa promoção'


    },
    {
      imageSrc: 'assets/imagens/banner-principal2.jpg',
      imageAlt: 'banner-principal2',
      description: 'Se você é um geek, este é o Site De Venda Online certa para você!!',


    },

  ]
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
