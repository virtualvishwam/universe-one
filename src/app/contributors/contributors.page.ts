import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.page.html',
  styleUrls: ['./contributors.page.scss'],
})
export class ContributorsPage {




  iconAttributions;

  constructor(private router: Router) { }




  openHelpUs() {
    this.router.navigate(['help-us']);
  } 

}
