import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss'
})
export class ForgetPassword {
  email: string = '';
  isLoading: boolean = false;
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  onSubmit() {
    if (!this.email) {
      this.message = 'Veuillez entrer votre adresse e-mail';
      this.messageType = 'error';
      return;
    }

    this.isLoading = true;
    this.message = '';

    // Simulation d'envoi d'email (à remplacer par votre logique API)
    setTimeout(() => {
      this.isLoading = false;
      this.message = 'Un email de réinitialisation a été envoyé à votre adresse e-mail';
      this.messageType = 'success';
      this.email = '';
    }, 2000);
  }
}
