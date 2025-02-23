import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Vérifie le chemin d'importation
import { LoginComponent } from './auth/login.component';  // Vérifie le chemin d'importation

const routes: Routes = [
  { path: '', component: HomeComponent },  // Page d'accueil
  { path: 'login', component: LoginComponent },  // Page de connexion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Déclare les routes
  exports: [RouterModule]  // Exporte le module de routage
})
export class AppRoutingModule {}

