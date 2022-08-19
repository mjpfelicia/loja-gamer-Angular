import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { HomeComponent } from './pages/home/home.component';
import { LogimComponent } from './pages/login/login.component';
import{ ContatosComponent} from './pages/contatos/contatos.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LogimComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path:'contatos', component: ContatosComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
