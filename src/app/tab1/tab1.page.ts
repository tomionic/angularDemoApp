import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})

export class Tab1Page {
  public authenticationChange$: Observable<boolean>;
  constructor(private authenticationService: AuthenticationService) {
    this.authenticationChange$ = authenticationService.authenticationChange$;
   }

  async login(): Promise<void> {
    await this.authenticationService.login();
  }
  async logout(): Promise<void> {
    this.authenticationService.logout();
  }

}
