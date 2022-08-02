import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lojaGamer';

    images = [
      {
        imageSrc: 'assets/imagens/banner3.png',
        ImageAlt: 'banner3',
      },
      {
        imageSrc: 'assets/imagens/banner2.jpg',
        ImageAlt: 'banner2',

      },
      {
        imageSrc: 'assets/imagens/banner-principal2.jpg',
        ImageAlt: 'banner-principal2',

      },

    ]



  }
