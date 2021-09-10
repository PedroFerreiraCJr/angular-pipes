import { Injectable } from '@angular/core';

/**
 * Este é um serviço que fornece as configurações do locale da aplicação.
 * Ver configuração dele no módulo raiz da aplicação.
 */
@Injectable()
export class SettingsService {

  constructor() { }

  public getLocale(): string {
    return 'pt-BR';
  }
}
