import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent implements OnInit {

  constructor(private emitter: Events) {
    this.emitter.subscribe("similar", this.parseData);
  }

  ngOnInit() {


  }
  parseData(data) {
    console.log("similar data: ", data);
  }
}
