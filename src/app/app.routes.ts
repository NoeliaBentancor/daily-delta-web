import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/components/auth.component';
import { HomeLayoutComponent } from '../core/home-layout/home-layout.component';

export const routes: Routes = [
    { path: "home", component: HomeLayoutComponent },
    { path: "auth", component: AuthComponent }
];
