import { Component, OnInit } from '@angular/core';
import { NGOData } from '../ngodata.service';

@Component({
  selector: 'app-ngo-list',
  templateUrl: './ngo-list.page.html',
  styleUrls: ['./ngo-list.page.scss'],
})
export class NGOListPage implements OnInit {

  private ngoList = this.ngoData.ngoList;

  constructor(private ngoData: NGOData) { }

  ngOnInit() {
  }

}
