import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importer CommonModule pour *ngIf
import { FormsModule } from '@angular/forms';  // Importer FormsModule pour ngModel
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule  // Importer FormsModule dans un module enfant
  ],
  exports: [LoginComponent]
})
export class AuthModule { }
