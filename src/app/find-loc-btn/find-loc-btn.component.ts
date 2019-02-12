import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'find-loc-btn',
  templateUrl: './find-loc-btn.component.html',
  styleUrls: ['./find-loc-btn.component.scss']
})
export class FindLocBtnComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit() {
  }

  clickHandler() {
    //this.provider.getSavedEstates().then(e => this.estates = e);
    //this.nav.navigateForward("SelectLocationComponent");
  }
}
