import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'services/firebase.service';
import { ProviderService } from 'src/provider/provider.service';

@Component({
  selector: 'estates',
  templateUrl: './estates.component.html',
  styleUrls: ['./estates.component.scss'],
})

export class EstatesComponent implements OnInit {

  private sub: any;
  data: any;
  regions: string[];
  location: string;
  locID: string;

  constructor(
    private route: ActivatedRoute,
    private service: FirebaseService,
    private provider: ProviderService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.getData(params);
    });
  }

  ngOnDestroy() {
    this.sub.unsubsribe();
  }

  getData(params: any) {
    this.service.fetchData().subscribe(data =>
      this.parseData(data, params)
    );
  }

  parseData(data: any, params: any) {
    this.location = data["locations-data"][params.id].location.name;
    this.locID = params.id;
    this.data = this.provider.groupByRegion(data["locations-data"][params.id]);
    this.regions = Object.keys(this.data);
  }
}
