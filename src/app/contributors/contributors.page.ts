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
      role: "Handling Website Development",
      onClick: ""
    },
    {
      name: "Ankur Sharma",
      imagePath: "https://image.flaticon.com/icons/svg/188/188995.svg",
      role: "Handling Website Promotions",
      onClick: ""
    },
    {
      name: "Saurabh Tiwari",
      imagePath: "https://image.flaticon.com/icons/svg/2829/2829796.svg",
      role: "Handling Graphic Designs",
      onClick: "https://www.instagram.com/beauxarts.in"
    }
  ]


  constructor(private router: Router, private firestore: AngularFirestore) {
  }


  openHelpUs() {
    this.router.navigate(['help-us']);
  }

}
