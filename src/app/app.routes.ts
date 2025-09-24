import { Routes } from '@angular/router';

export const routes: Routes = [  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/cliente/login.routes').then(rota => rota.routes)
  },
  {
    path: 'pesquisa',
    loadChildren: () => import('./pages/pesquisa/pesquisa.routes').then(rota => rota.routes)
  },
];