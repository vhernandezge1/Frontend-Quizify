import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, UserCredential, User } from 'firebase/auth';  // Importations Firebase v9
import { environment } from '../environments/environment';  // Assurez-vous que votre environnement est bien importé

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth;

  constructor() {
    this.auth = getAuth();  // Initialisation de l'authentification
  }

  // S'inscrire un utilisateur avec email et mot de passe
  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Connexion de l'utilisateur avec email et mot de passe
  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Déconnexion de l'utilisateur
  signOut() {
    return signOut(this.auth);
  }

  // Obtenir l'utilisateur courant
  getCurrentUser() {
    return this.auth.currentUser;
  }
}
