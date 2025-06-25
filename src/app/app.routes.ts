import { Routes } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';

export const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: '**', redirectTo: '' },
];
