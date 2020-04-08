import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-settings',
  templateUrl: './language-settings.page.html',
  styleUrls: ['./language-settings.page.scss'],
})
export class LanguageSettingsPage {

  get selectedLanguage() {
    return localStorage.getItem('langCode');
  }

  set selectedLanguage(langCode) {
    localStorage.setItem('langCode',langCode);
    this.translate.use(langCode);
  }

  languageCodes = {
    "English": "en",
    "हिन्दी": "hi"
  }
  availableLanguages = Object.keys(this.languageCodes);

  constructor(private translate: TranslateService) { }

}
