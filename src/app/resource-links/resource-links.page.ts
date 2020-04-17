import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-resource-links',
  templateUrl: './resource-links.page.html',
  styleUrls: ['./resource-links.page.scss'],
})
export class ResourceLinksPage implements OnInit {


  private resourceLinks = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('resources').get().subscribe(
      docRef => {
        docRef.docs.forEach(data => {
          this.resourceLinks.push(data.data());
        })
      }
    );
  }


  openResource(link) {
    window.open(link, '_blank');
  }

}
