import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // S'inscrire un utilisateur avec email et mot de passe
  signUp(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Connexion de l'utilisateur avec email et mot de passe
  signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Déconnexion de l'utilisateur
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }

  // Obtenir l'utilisateur courant
  getCurrentUser(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }
}
