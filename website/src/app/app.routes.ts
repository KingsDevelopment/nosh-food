import { Routes } from '@angular/router';

// components
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  { path: '',
    component: AppComponent
  },
  {
    path: '**',
    component: AppComponent
  }
];
