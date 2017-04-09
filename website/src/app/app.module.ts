import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// dependencies
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleNotificationsModule } from 'angular2-notifications';

// sdk
import { SDKBrowserModule } from '../sdk';
import { LoopBackConfig } from '../sdk/lb.config';

// components
import { AppComponent } from './app.component';

// routes
import { appRoutes } from './app.routes';

// services
import { UserService, ValidationService, LogService } from '../services';

// guards
import { AuthGuard } from '../guards';

// environment
import { environment } from '../environments/environment';

// modules
import { BaseModule, LoginModule } from './modules';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // core
    BrowserModule,
    HttpModule,
    RouterModule,

    // sdk
    SDKBrowserModule,

    // dependencies
    NgbModule,
    SimpleNotificationsModule.forRoot(),

    // routes
    RouterModule.forRoot(appRoutes),

    // modules
    BaseModule,
    LoginModule
  ],
  providers: [
    // services
    UserService,
    LogService,
    ValidationService,

    // guards
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    LoopBackConfig.setBaseURL(environment.apiUrl);
  }
}
