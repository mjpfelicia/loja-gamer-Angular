import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



export interface LogimComponent {
  id?: string;
  class: string;
  description: string;
}

@Component({
  selector: 'app-logim',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LogimComponent implements OnInit {
  logimComponent!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    
    this.logimComponent = new FormGroup({
      id: new FormControl(''),
      nome:new FormControl(''),
      email:new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
     
    });
  }
  


  get email() {
    return this.logimComponent.get('email')!;
  }


  get Description( ) {
    return this.logimComponent.get('description')!;
  }


  get senha(  ) {
    return this.logimComponent.get('senha')!;
  }


  get nome() {
    return this.logimComponent.get('nome')!;
  }



  submit(): void {
    if (this.logimComponent.validator) {
      return
    }
  }



}
