import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// configuração adicional não feita na aula da Loiane
import ptBr from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';

// configuração adicional não feita na aula da Loiane
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    // declaração do pipe que foi criado
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  // configuração sem utilizar o serviço SettingsService, também funciona, mas é hard-coded
  //providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  providers: [
    SettingsService,
    {
      provide: LOCALE_ID, deps: [SettingsService], useFactory: (settingsService: any) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
