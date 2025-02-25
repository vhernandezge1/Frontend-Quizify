import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';  
import { LoginComponent } from './auth/login.component';  
import { AppRoutingModule } from './app-routing.module';  
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environments';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,  
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
