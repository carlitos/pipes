import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,  NgModule } from '@angular/core';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { USE_VALUE } from '../../node_modules/@angular/core/src/di/injector';
import { DomseguroPipe } from './pipes/domseguro.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
