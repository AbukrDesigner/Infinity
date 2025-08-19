import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { Login } from './pages/login/login';
import { IsConnected } from './pages/is-connected/is-connected';
import { Register } from './pages/register/register';
import { ForgetPassword } from './pages/forget-password/forget-password';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPage, data:{title:'Page d\'acceuil'} },
  { path: 'login', component: Login, data:{title:'Page de connexion'} },
  {path:'is-connected', component: IsConnected, data:{title:'l\'utilisateur est connecte'}},
  {path:'register', component: Register, data:{title:'Page d\'inscription'}},
  {path:'forget-password', component: ForgetPassword, data:{title:'Reinitialiser le mot de passe'},},
  { path: '**', redirectTo: '/home' }
];
