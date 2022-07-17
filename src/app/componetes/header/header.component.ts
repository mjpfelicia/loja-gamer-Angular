import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Input() header: string = '';
  show: boolean = false;
  dropdownMenu = 'dropdown-menu';


  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.show = !this.show;
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
