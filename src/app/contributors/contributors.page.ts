import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.page.html',
  styleUrls: ['./contributors.page.scss'],
})
export class ContributorsPage {



  ourTeam = [
    {
      name: "virtualvishwam",
      imagePath: "https://image.flaticon.com/icons/svg/189/189001.svg",
      role: "Handling Web Development",
      onClick: ""
    },
    {
      name: "Ankur Sharma",
      imagePath: "../../assets/images/icons/animal.svg",
      role: "Handling Social Media",
      onClick: ""
    }
  ]


  constructor(private router: Router, private firestore: AngularFirestore) {
  }


  openHelpUs() {
    this.router.navigate(['help-us']);
  }

}
