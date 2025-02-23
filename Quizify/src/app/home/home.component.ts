// src/app/home/home.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  // Ajouter la méthode startQuiz() ici
  startQuiz() {
    console.log("Démarrer le quiz...");
    // Tu peux ajouter ici la logique pour démarrer un quiz,
    // comme rediriger l'utilisateur vers une autre page ou afficher un quiz
  }
}
