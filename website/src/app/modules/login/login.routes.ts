import { Routes } from '@angular/router';

// components
import { LoginComponent, LogoutComponent } from './components';

export const loginRoutes: Routes = [
  { path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];
