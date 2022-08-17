import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogimComponent } from './pages/login/login.component';

import { HomeComponent } from './pages/home/home.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './componentes/header/header.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { BannerPrincipalComponent } from './componentes/sectionApresentacao/banner-principal.component';
import { ProdutosOfertasComponent } from './componentes/sectionOfertasDaSemana/produtos-ofertas.component';
import { ProdutoMomentosComponent } from './componentes/sectionQueridinhos/produto-momentos.component';
import { LancamentoComponent } from './componentes/sectionLancamento/lancamento.component';
import { CarroselMarcasComponent } from './componentes/sectionMarcas/carrosel-marcas.component';
import { DestaqueComponent } from './componentes/sectionNovaschegadas/destaque.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TesteComponent } from './componente/teste/teste.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogimComponent,
    HomeComponent,
    CarrinhoComponent,
    BannerPrincipalComponent,
    ProdutosOfertasComponent,
    ProdutoMomentosComponent,
    LancamentoComponent,
    CarroselMarcasComponent,
    DestaqueComponent,
    FooterComponent,
    TesteComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],


  providers: [],
  bootstrap: [AppComponent],



  exports: [
  ],
})


export class AppModule {


}
