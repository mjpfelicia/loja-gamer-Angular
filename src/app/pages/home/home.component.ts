import { Component, OnInit } from '@angular/core';
import { CardProduto } from 'src/app/Component /card/card.component';
import { CarroselImage } from '../../Component /carousel/carrosel.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'carrousel ';

  
  

  constructor() { }

  ngOnInit(): void {
  }

}
