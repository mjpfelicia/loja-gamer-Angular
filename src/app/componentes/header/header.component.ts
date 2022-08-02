import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faUser, faShoppingCart, faHeart, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter<boolean>();
  @Input() header: string = '';
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;
  faBars = faBars;
  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {

  }


}
