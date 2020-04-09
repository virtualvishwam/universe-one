import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-appeal',
  templateUrl: './our-appeal.page.html',
  styleUrls: ['./our-appeal.page.scss'],
})
export class OurAppealPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openHelpUs() {
    this.router.navigate(['help-us'])
  }

}
