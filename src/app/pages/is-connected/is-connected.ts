import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-is-connected',
  imports: [],
  templateUrl: './is-connected.html',
  styleUrl: './is-connected.scss'
})
export class IsConnected {
constructor(private router:Router){}
//ici la focntion qui permet de deconnecter un utilisateur
LogOut(){
  Swal.fire({
    title: 'Deconnexion',
    text: "Vous allez être déconnecté de votre session",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#009EE0',
    confirmButtonText: 'Oui, me déconnecter',
   cancelButtonText:'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      // Ici vous pouvez ajouter la logique de déconnexion
      Swal.fire({
        title: 'Déconnecté !',
        text:'Vous avez été déconnecté avec succès.',
        icon:'success',
        showConfirmButton:false,
        timer:2000,
      }).then(()=>{
        this.router.navigate(['/main-page']);
      })
    }
  });
}
}
