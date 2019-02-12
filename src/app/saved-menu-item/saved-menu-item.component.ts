import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/provider/provider.service';

export type SavedEstate = {
  id: number
  refId: string
  location: string
  info: {
    type: string
    bedrooms: number
  }
  img: string
}

@Component({
  selector: 'saved-menu-item',
  templateUrl: './saved-menu-item.component.html',
  styleUrls: ['./saved-menu-item.component.scss']
})
export class SavedMenuItemComponent implements OnInit {

  data: any[];

  constructor(private provider: ProviderService) {

  }

  ngOnInit() {
    this.provider.getSavedEstates().then((d) => this.data = d);
  }

  viewClickHandler(refNo: string, estate: SavedEstate) {
    console.log("view clicked, id: ");
    this.provider.saveEstate(refNo, estate);
  }

}
