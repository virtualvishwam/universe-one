import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-settings',
  templateUrl: './language-settings.page.html',
  styleUrls: ['./language-settings.page.scss'],
})
export class LanguageSettingsPage implements OnInit {


  private availableLanguages = [
    "English",
    "हिन्दी"
  ]

  constructor() { }

  ngOnInit() {
  }

}
