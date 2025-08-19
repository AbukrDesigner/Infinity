import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule,  RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  formData = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  showPassword = false;
  showConfirmPassword = false;

  constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit() {
    // Logique d'inscription ici
    if (
      this.formData.nom &&
      this.formData.prenom &&
      this.formData.email &&
      this.formData.password &&
      this.formData.confirmPassword
    ){
      
    }
  }
// redirect user to login page onclick!
  // goToLogin() {
  //   this.router.navigate(['/login']);
  // }
  
  // redirect user to home page or is-connected page onclick
  NavigateTo_isConnected(){
    this.router.navigate(['/is-connected']);
  }
}
