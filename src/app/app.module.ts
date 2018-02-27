import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { FrameworkModule } from './modules/framework/framework.module';
import { ChrisNorwegianStatesModule } from './modules/chris-norwegian-states/chris-norwegian-states.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FrameworkModule,
    HttpClientModule,
    ChrisNorwegianStatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
