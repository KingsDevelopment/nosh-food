import { Component } from '@angular/core';

@Component({
  selector: 'nosh-food',
  template: `<router-outlet></router-outlet>
  <simple-notifications [options]="notificationOptions"></simple-notifications>`
})
export class AppComponent {
  public notificationOptions = {
    preventDuplicates: true,
    preventLastDuplicates: true
  };
}
