import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AprobadoComponent } from './components/aprobado/aprobado.component';
import { ProcesoComponent } from './components/proceso/proceso.component'


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'certificaciones', component: CursosComponent },
  {path: 'aprobado', component: AprobadoComponent },
  {path: 'proceso', component: ProcesoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
