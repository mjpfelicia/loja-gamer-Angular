import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/models.component';
import { UserService } from 'src/app/services/user.service';





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
  faUser = faUser;
  
  
  constructor
  (private userService: UserService)
  { }
  
  ngOnInit(): void {
    
  }


  mensagem: string = ""
  userModel = new User();



  validaLogin(): boolean {
    if (//falta preencher campos
      this.userModel.nome === undefined || this.userModel.nome === '' || 
      this.userModel.email === undefined || this.userModel.email === '' ||
      this.userModel.password === undefined || this.userModel.password === ''
    ) { 
      return false;
    } else {
      return true;
    }
  }

  signin() {
    //fazer validação
    if ( this.validaLogin() ) { //pode cadastrar?
      console.log(this.userModel);
      this.userService.sigin(this.userModel)
        .subscribe(
          {
            next: (response) => {
              console.log(response);
              this.mensagem = `Logado com Sucesso! ${response.status} ${response.statusText}`

            },
            error: (e) => {
              console.log('Usuário não encontrado', e);
              // console.clear()
              this.mensagem = `${e.error} ${e.status} ${e.statusText}`
            }

          }
        )

    } else {//falta preencher campos

      console.log(this.userModel);
      this.mensagem = "Preencher todos os campos"
    }
  }


 
  
}









