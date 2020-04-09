import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-help-us',
  templateUrl: './help-us.page.html',
  styleUrls: ['./help-us.page.scss'],
})
export class HelpUsPage {

  constructor(private iab: InAppBrowser) { }

  openGithub() {
    this.iab.create("https://github.com/virtualvishwam/universe-one","_system");
  }

  openAddNGOForm() {
    this.iab.create("https://forms.gle/vuHHNnDnJDjWSksY8","_system");
  }

  openContactUsForm() {
    this.iab.create("https://forms.gle/nB26A8G1i6YrD2q27","_system");
  }
}
