import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { AprobadoComponent } from './components/aprobado/aprobado.component';
import { ProcesoComponent } from './components/proceso/proceso.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CursosComponent,
    HomeComponent,
    AprobadoComponent,
    ProcesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
