import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// configuração adicional não feita na aula da Loiane
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipePuro } from './filtro-array.pipe'; // exemplo de pipe puro

// configuração adicional não feita na aula da Loiane
registerLocaleData(ptBr)

@NgModule({
  // na seção de declarations do módulo são aceitos os artefatos dos tipos: component, directive, pipes
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    // declaração do pipe que foi criado
    CamelCasePipe,
    FiltroArrayPipePuro
  ],
  // na seção de imports são declarados os módulos que devem ser importados para o módulo atual
  imports: [
    BrowserModule,
    FormsModule
  ],
  // configuração sem utilizar o serviço SettingsService, também funciona, mas é hard-coded
  //providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  // na seção de providers do módulo são aceitos os artefatos do tipo: service
  providers: [
    SettingsService,
    {
      provide: LOCALE_ID, deps: [SettingsService], useFactory: (settingsService: any) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
