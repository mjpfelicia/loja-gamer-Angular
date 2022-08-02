import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LogimComponent } from './pages/login/login.component';

import { HomeComponent } from './pages/home/home.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarroselComponent } from './componentes/carousel/carrosel.component';
import { CardComponent } from './componentes/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { ProdutosOfertasComponent } from './componentes/produtos-ofertas/produtos-ofertas.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LancamentoComponent } from './componentes/lancamento/lancamento.component';
import { BannerPrincipalComponent } from './componentes/banner-principal/banner-principal.component';
import { ProdutoMomentosComponent } from './componentes/produto-momentos/produto-momentos.component';
import { CardqueridinhosComponent } from './componentes/cardqueridinhos/cardqueridinhos.component';
import { CarroselMarcasComponent } from './componentes/carrosel-marcas/carrosel-marcas.component';
import { CarroselLancamentoComponent } from './componentes/carrosel-lancamento/carrosel-lancamento.component';
import { DestaqueComponent } from './componentes/destaque/destaque.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogimComponent,
    HomeComponent,
    CardComponent,
    CarroselComponent,
    ProdutosOfertasComponent,
    LancamentoComponent,
    BannerPrincipalComponent,
    ProdutoMomentosComponent,
    CardqueridinhosComponent,
    CarroselMarcasComponent,
    CarroselLancamentoComponent,
    DestaqueComponent,
    CarrinhoComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    FlexLayoutModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],


  providers: [MatIconRegistry],
  bootstrap: [AppComponent],



  exports: [
    MatIconModule,
    MatToolbarModule,],
})


export class AppModule {


}
