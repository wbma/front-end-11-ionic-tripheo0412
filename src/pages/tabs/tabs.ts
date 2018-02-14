import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { FrontPage } from '../front/front';
import { RegisterPage } from '../register/register';
import { UploadPage } from '../upload/upload';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = FrontPage;
  tab3Root = RegisterPage;
  tab4Root = UploadPage;

  constructor() {

  }
}
