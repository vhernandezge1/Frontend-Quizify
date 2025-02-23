import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Page d'accueil
import { LoginComponent } from './auth/login.component';  // Page de connexion

const routes: Routes = [
  { path: '', component: HomeComponent },  // Par défaut, afficher la page d'accueil
  { path: 'login', component: LoginComponent },  // Route pour la page de connexion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
ompo