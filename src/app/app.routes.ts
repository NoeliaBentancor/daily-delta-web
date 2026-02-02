import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/components/auth.component';
import { HOME_LAYOUT_ROUTES } from '../core/home-layout/home-layout.routes';

export const routes: Routes = [
    {path:'', redirectTo: 'auth', pathMatch: 'full'},
   ...HOME_LAYOUT_ROUTES,
    { path: "auth", component: AuthComponent },
];
