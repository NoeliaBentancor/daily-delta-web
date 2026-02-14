import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/components/auth.component';
import { TrackerComponent } from './features/tracker/tracker.component';
import { HomeLayoutComponent } from './core/components/home-layout/home-layout.component';

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
