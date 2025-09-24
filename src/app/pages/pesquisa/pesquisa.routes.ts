import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pesquisa.component')
        .then(p => p.PesquisaComponent)
  }
];