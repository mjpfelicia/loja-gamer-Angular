import { Component, OnInit } from '@angular/core';
import { CardProduto } from 'src/app/card/card.component';
import { CarroselImage } from '../../carousel/carrosel.component'

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
