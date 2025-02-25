import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login.component';
import { AppRoutingModule } from './app-routing.module';

// Firebase imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';  // Firebase v9+ imports
import { provideAuth, getAuth } from '@angular/fire/auth';  // Firebase Authentication
import { environment } from '../environments/environment';  // Firebase configuration from environment.ts

// Angular modules
import { FormsModule } from '@angular/forms';  // Required for ngModel
import { CommonModule } from '@angular/common';  // Required for *ngIf

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Required for ngModel
    CommonModule,  // Required for *ngIf
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),  // Initialize Firebase in providers
    provideAuth(() => getAuth())  // Provide authentication service in providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
