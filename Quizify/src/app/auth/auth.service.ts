import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private afAuth ;
  constructor() {
    
    this.afAuth = getAuth();
  }

  // S'inscrire un utilisateur avec email et mot de passe
  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.afAuth,email, password);
  }

  // Connexion de l'utilisateur avec email et mot de passe
  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.afAuth,email, password);
  }

  // Déconnexion de l'utilisateur
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }

  
  }

