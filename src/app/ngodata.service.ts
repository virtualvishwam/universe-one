import { Injectable } from '@angular/core';
import { NGODataInterface } from './ngo-data-interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NGOData {

  constructor(private firestore: AngularFirestore, private loaderCtrl: LoadingController) { }

  private locationData;
  private tempStates = [];

  fetchCountries() {
    let list: string[] = [];

    this.firestore.collection('locationData_en').valueChanges({idField: 'id'}).subscribe(data => {
      this.locationData = data;
      data.forEach(country => {
        list.push(country.id);
      })
    })

    return list;
  }

  fetchStates(country) {
    let list: string[] = [];
    this.locationData.forEach(element => {
      if (element.id === country) {
        this.tempStates = element;

        list = Object.keys(element);

        let x = list.indexOf('id');
        list.splice(x,1);
      }
    });
    return list;
  }

  fetchCities(state) {
    let list: string[] = this.tempStates[state];
    return list;
  }

  fetchNGO(country, state, city) {
    this.loaderCtrl.create({
      spinner: "bubbles"
    }).then(res => { res.present(); });

    let docRef = this.firestore.collection('organizationList', ref =>
      ref.where("city", "array-contains", city)
    ).get();

    let list = [];

    return new Promise(resolve => {

      docRef.subscribe(dataRef => {

        dataRef.forEach(data => {
          if (data.data().state.includes(state) && data.data().country.includes(country)) {
            list.push(data.data());
          }
        });

        this.loaderCtrl.dismiss();
        resolve(list);

      }, err => {
        console.log(err);
        resolve(list);
      });

    });
  }


}
