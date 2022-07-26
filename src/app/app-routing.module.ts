import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{CarrinhoComponent} from './pages/carrinho/carrinho.component'
import { HomeComponent } from './pages/home/home.component';
import{LogimComponent} from './pages/login/login.component'

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'carrinho', component:CarrinhoComponent},
  {path: 'logim', component:LogimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
