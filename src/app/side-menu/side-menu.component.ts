import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'services/firebase.service';


@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private service: FirebaseService) {

  }

  ngOnInit() { }

  findClickHandler() {
    console.log("side-menu loc btn clicked");
  }
}
