import { Component, OnInit, Input } from '@angular/core';
import { IEstate } from 'src/contracts/Estate';
import { Events } from '@ionic/angular';

@Component({
  selector: 'saved-item',
  templateUrl: './saved-item.component.html',
  styleUrls: ['./saved-item.component.scss']
})
export class SavedItemComponent implements OnInit {

  data: any;
  location: string;
  locationName: string;

  @Input()
  set setData(data: any) {
    this.data = data;
  }
  @Input()
  set setLocation(location: string) {
    this.location = location;
  }

  @Input()
  set locName(name: string) {
    this.locationName = name;
  }

  constructor(public emitter: Events) { }

  ngOnInit() {
  }
}
