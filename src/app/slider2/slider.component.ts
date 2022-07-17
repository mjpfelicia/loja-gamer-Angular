import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

  slidePostion = 0;
  slides = [
    {
      imagem: 'assets/imagens/banner3.png',
      descicao: 'Escolha cada e monte o computador dos seus sonhos!',
    },
    {
      imagem: 'assets/imagens/banner2.jpg',
      descicao: 'Se você é um geek, este é o Site De Venda Online certa para você!',
    },
    {
      imagem: 'assets/imagens/banner-principal2.jpg',
      descicao: 'Falta pouco para acabar o estoque. Não fique de fora dessa promoção'
    },


  ]
  constructor() { }

  ngOnInit(): void {
  }

  nextSlide(): void {
    console.error('nextSlide')
    const slides = document.querySelector(".carousel-inner")?.childNodes;

    console.log({ slides })

    if(Array.isArray(slides)){
      slides[this.slidePostion].style.display = "none"
      slides[this.slidePostion++].style.display = "block"
    }


  }

  prevSlide(): void {
    console.error('prevSlide')
  }

}
