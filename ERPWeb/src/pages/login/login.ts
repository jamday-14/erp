import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';

import { User, Settings, Menu } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'admin',
    password: 'Password1'
  };

  // Our translated text strings
  private loginErrorString: string;
  loader = this.loadingCtrl.create({
    content: "Logging in. Please wait..."
  });

  constructor(public navCtrl: NavController,
    public user: User,
    public settings: Settings,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public translateService: TranslateService,
    public menu: Menu) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })

    this.settings.load().then(() => { });

    this.menu.activateMenu(false, false, false, false, false, false);
  }

  // Attempt to login in through our User service
  doLogin() {
    this.loader.present();
    this.user.login(this.account).subscribe((resp) => {
      this.loader.dismiss();
      this.navCtrl.setRoot(MainPage);
    }, (err) => {
      this.loader.dismiss();
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
