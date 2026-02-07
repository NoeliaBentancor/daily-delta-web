import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout.component';
import { TrackerComponent } from '../../features/tracker/tracker.component';

export const HOME_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'tracker',
        component: TrackerComponent
      },
    ],
  },
];
