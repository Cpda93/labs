import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AprobadoComponent } from './components/aprobado/aprobado.component';
import { ProcesoComponent } from './components/proceso/proceso.component'


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'app-cursos', component: CursosComponent },
  {path: 'app-aprobado', component: AprobadoComponent },
  {path: 'app-proceso', component: ProcesoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
