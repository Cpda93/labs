import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
//import { NavBarComponent } from './components/nav-bar/nav-bar.component'

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'app-cursos', component: CursosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
