import { Routes } from '@angular/router';
import { NotFouneComponent } from './shared/pages/not-foune/not-foune.component';

export const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path: '**',
      component: NotFouneComponent
    }
  ];
