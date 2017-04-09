import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { BaseComponent } from './components';

// routes
import { baseRoutes } from './base.routes';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    // core
    BrowserModule,

    // routes
    RouterModule.forRoot(baseRoutes)
  ],
  providers: [],
  bootstrap: [
    BaseComponent
  ]
})
export class BaseModule {}
