import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componetes/header/header.component';
import { FooterComponent } from './componetes/footer/footer.component';
import { LogimComponent } from './pages/logim/logim.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider2/slider.component';
import { HomeComponent } from './pages/home/home.component';
import { CarroselComponent } from './carousel/carrosel.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import { ProdutosOfertasComponent } from './produtos-ofertas/produtos-ofertas.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogimComponent,
    CarrinhoComponent,
    HomeComponent,
    SliderComponent,
    CardComponent,
    CarroselComponent,
    ProdutosOfertasComponent,
    

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
    MatTooltipModule

  ],


  providers: [MatIconRegistry],
  bootstrap: [AppComponent],

 

  exports: [
    MatIconModule,
    MatToolbarModule,]
})


export class AppModule {


}
