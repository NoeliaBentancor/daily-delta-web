import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/components/auth.component';
import { HOME_LAYOUT_ROUTES } from './core/home-layout/home-layout.routes';
import { HomeLayoutComponent } from './core/home-layout/home-layout.component';
import { TrackerComponent } from './features/tracker/tracker.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: 'tracker', component: TrackerComponent },
      { path: '', redirectTo: 'tracker', pathMatch: 'full' }
    ]
  },
  { path: 'auth', component: AuthComponent }
];
