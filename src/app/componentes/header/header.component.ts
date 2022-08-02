import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter<boolean>();
  @Input() header: string = '';
  
  constructor() { }

  ngOnInit(): void {
  
  }
  

}
