import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter<boolean>();
  @Input() header: string = '';
  show: boolean = false;
  dropdownMenu = 'dropdown-menu';
  protected subscribe$ = new Subject<boolean>();
  mostrarMenuMobile: boolean = false;



  constructor() { }

  ngOnInit(): void {
    this.sidenavToggle.subscribe(() => { 
      
      this.mostrarMenuMobile = !this.mostrarMenuMobile;
      
      console.log({ mostrarMenuMobile: this.mostrarMenuMobile })
     });
  }

  showMessage(): void {
    this.show = !this.show;
  }

  public onToggleSidenav = () => {
    console.log("toggle")
    this.sidenavToggle.emit();    
  }

}
