import { Component } from '@angular/core';
import { AuthService } from '../auth.service';  // Assurez-vous que le chemin est correct
import { Router } from '@angular/router';
import { UserCredential } from 'firebase/auth';  // Utilisation de UserCredential pour typer la réponse

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.signIn(this.email, this.password)
      .then((userCredential: UserCredential) => {
        console.log('Utilisateur connecté:', userCredential.user);
        this.router.navigate(['/home']);  // Redirige vers la page d'accueil après une connexion réussie
      })
      .catch((error) => {
        console.error('Erreur de connexion:', error);
        this.errorMessage = 'Erreur de connexion : ' + error.message;  // Affiche l'erreur dans le template
      });
  }
}
