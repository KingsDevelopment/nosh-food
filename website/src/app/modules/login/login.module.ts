import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// components
import { LoginComponent, LogoutComponent } from './components';

// routes
import { loginRoutes } from './login.routes';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    // core
    BrowserModule,
    ReactiveFormsModule,

    // routes
    RouterModule.forRoot(loginRoutes)
  ],
  providers: [],
  bootstrap: [
    LoginComponent,
    LogoutComponent
  ]
})
export class LoginModule {}
