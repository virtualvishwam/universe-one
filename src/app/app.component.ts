import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
    private splashScreen: SplashScreen, private translate: TranslateService,
    private statusBar: StatusBar, private firestore: AngularFirestore
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    let langCode = localStorage.getItem('langCode');
    if(langCode) {
      this.translate.setDefaultLang(langCode);
    }
    else {
      this.translate.setDefaultLang('en');
    }
    
  }


  ngOnInit() {

  }

  clickedOurAppeal() {
    this.router.navigate(['/our-appeal']);
    this.menu.close();
  }
}
