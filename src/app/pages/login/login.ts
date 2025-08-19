import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor(private router:Router){}
  showPassword = false;
  email: string = '';
  password: string = '';

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    if (passwordInput) {
      passwordInput.type = this.showPassword ? 'text' : 'password';
    }
  }

  onSubmit(loginForm: any) {
    if (loginForm.valid) {
      console.log('Formulaire valide:', { email: this.email, password: this.password });
      this.router.navigate(['/is-connected']);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
