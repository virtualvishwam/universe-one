import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'NGO List - COVID-19',
      url: '/ngo-list',
      icon: 'list'
    },
    {
      title: 'Helpful Links',
      url: '/resource-links',
      icon: 'document-text'
    },
    {
      title: 'Contributors',
      url: '/contributors',
      icon: 'people'
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
    },

  ];

  constructor(
    private platform: Platform, private router: Router, private menu: MenuController,
    private splashScreen: SplashScreen, private translate: TranslateService,
    private statusBar: StatusBar, private analytics: AngularFireAnalytics
  ) {
    this.initializeApp();
    this.logAnalyticsEvent();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    let langCode = localStorage.getItem('langCode');
    if (langCode) {
      this.translate.setDefaultLang(langCode);
    }
    else {
      this.translate.setDefaultLang('en');
    }

  }

  logAnalyticsEvent() {
    this.analytics.logEvent('app_opened');
    // this.analytics.logEvent('dev_run');
  }


  ngOnInit() {

  }

  clickedOurAppeal() {
    this.router.navigate(['/our-appeal']);
    this.menu.close();
  }

  openWebsite(website) {

    switch (website) {
      case 'facebook':
        window.open("https://www.facebook.com/universeoneorg","_blank")
        break;
      case 'github':
        window.open("https://github.com/virtualvishwam/universe-one","_blank");
        break;
    }

  }
}
