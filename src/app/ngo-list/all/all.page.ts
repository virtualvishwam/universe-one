import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})



export class AllPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  ngoList = [];

  constructor(private firestore: AngularFirestore, private route: ActivatedRoute) { }

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
}
