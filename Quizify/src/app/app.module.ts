import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';  
import { LoginComponent } from './auth/login.component';  
import { AppRoutingModule } from './app-routing.module';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,  
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
