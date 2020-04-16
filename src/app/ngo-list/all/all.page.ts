import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { IonContent, ToastController, AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})



export class AllPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  ngoList = [];

  constructor(private firestore: AngularFirestore, private route: ActivatedRoute, private toastCtrl: ToastController,
    private alrtCtrl: AlertController, private iab: InAppBrowser) { }

  ngOnInit() {
    this.getAllOrganizations();
  }


  async getAllOrganizations() {
    await this.firestore.collection('organizationList').get().subscribe(
      docRef => {
        docRef.docs.forEach(data => {
          this.ngoList.push(data.data());
        });
      },
      err => {
        console.log(err);
      }
    );
    setTimeout(()=> {
      this.scrollToNGO();
    },1000);
  }

  scrollToNGO() {
    this.route.queryParams.subscribe(
      params => {
        if (params && params.id) {
          let yAxisPoint = document.getElementById(params.id).offsetTop;
          this.content.scrollByPoint(0, yAxisPoint, 1000);
        }
      }
    );
  }

  async clickedIcon(icon) {
    let toast = await this.toastCtrl.create({
      duration: 2000,
      message: icon,
      mode: "md"
    });
    toast.present();
  }

  async showMessage(message) {
    let alert = await this.alrtCtrl.create({
      header: message.title,
      message: message.text,
      buttons: ["Okay"]
    });

    await alert.present();
  }

  openWebsite(link) {
    this.iab.create(link, '_system');
  }
}
