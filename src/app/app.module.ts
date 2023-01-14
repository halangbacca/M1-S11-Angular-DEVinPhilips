import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptalizePhilipsPipe } from './pipes/captalize-philips.pipe';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { ModalComponent } from './components/modal/modal.component';
import { CardNgContentComponent } from './components/card-ng-content/card-ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptalizePhilipsPipe,
    HeaderComponent,
    CardsComponent,
    ModalComponent,
    CardNgContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
