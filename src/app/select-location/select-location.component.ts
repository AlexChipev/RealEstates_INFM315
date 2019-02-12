import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/provider/provider.service';
import { NavController } from '@ionic/angular';
import { FirebaseService } from 'services/firebase.service';

@Component({
  selector: 'select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss']
})
export class SelectLocationComponent implements OnInit {

  locations: Location[];

  constructor(
    private provider: ProviderService, private service: FirebaseService) { }

  ngOnInit() {
    this.service.fetchData().subscribe((d) => {
      this.locations = d["locations"]
    });
  }

  clickHandler(id: string) {

  }
}
