import { Component } from '@angular/core';
import { NGOData } from '../ngodata.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngo-list',
  templateUrl: './ngo-list.page.html',
  styleUrls: ['./ngo-list.page.scss'],
})
export class NGOListPage {

  selectedCountry: string = "";
  selectedState: string = "";
  selectedCity: string = "";
  showNGOList: boolean;
  areaList: string[] = [];
  ngoList = [];


  constructor(private ngoData: NGOData, private iab: InAppBrowser, private alrtCtrl: AlertController,
    private router: Router) {
    this.areaList = ngoData.fetchCountries();
  }

  closeCountry() {
    this.selectedCountry = this.selectedState = this.selectedCity = "";
    this.areaList = this.ngoData.fetchCountries();
    this.showNGOList = false;
  }

  closeState() {
    this.selectedState = this.selectedCity = "";
    this.areaList = this.ngoData.fetchStates(this.selectedCountry);
    this.showNGOList = false;
  }

  closeCity() {
    this.selectedCity = "";
    this.showNGOList = false;
  }

  selectedArea(chosenArea: string) {

    if (!this.selectedCountry) {
      this.selectedCountry = chosenArea;
      this.areaList = this.ngoData.fetchStates(chosenArea);
    }
    else if (!this.selectedState) {
      this.selectedState = chosenArea;
      this.areaList = this.ngoData.fetchCities(chosenArea);
    }
    else if (!this.selectedCity) {
      this.selectedCity = chosenArea;
      this.ngoList = this.ngoData.fetchNGO(this.selectedCountry, this.selectedState, this.selectedCity);
      this.showNGOList = true;
    }

  }


  openWebsite(link) {
    this.iab.create(link, '_system');
  }

  async showMessage(message) {
    let alert = await this.alrtCtrl.create({
      header: "Message",
      message: message,
      buttons: ["Okay"]
    });

    await alert.present();
  }

  openAboutUs() {
    this.router.navigate(["our-appeal"]);
  }

  openAddNGOForm(){
    this.iab.create("https://forms.gle/vuHHNnDnJDjWSksY8","_system");
  }


}
