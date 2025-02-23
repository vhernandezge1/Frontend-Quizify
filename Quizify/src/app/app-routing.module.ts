// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login.component';

export const routes: Routes = [  // Ajoute "export" pour rendre 'routes' accessible dans d'autres fichiers
  { path: '', component: HomeComponent },  // Route pour la page d'accueil
  { path: 'login', component: LoginComponent },  // Route pour la page de connexion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Déclare les routes
  exports: [RouterModule]  // Exporte le module de routage
})
export class AppRoutingModule {}
