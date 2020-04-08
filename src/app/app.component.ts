import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'NGO List',
      url: '/ngo-list',
      icon: 'list'
    },
    {
      title: 'Language',
      url: '/language-settings',
      icon: 'settings'
    },
    {
      title: 'Help Us',
      url: '/help-us',
      icon: 'beer'
    }
  ];

  constructor(
    private platform: Platform, private router: Router, private menu: MenuController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }

  clickedOurAppeal() {
    this.router.navigate(['/our-appeal']);
    this.menu.close();
  }
}
