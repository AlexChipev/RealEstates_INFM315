import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseService } from 'services/firebase.service';
import { IEstate } from 'src/contracts/Estate';
import { ProviderService } from 'src/provider/provider.service';
import { Events } from '@ionic/angular';

const remove = "remove from estates";
const save = "save to my estates";

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  data: IEstate
  btnColor: string;
  btnTxt: string;
  isSelected: boolean;
  //location: string;

  constructor(
    private provider: ProviderService,
    private emitter: Events
  ) {
    //this.emitter.subscribe("overview", this.parseData);
  }

  ngOnInit() {
    //this.route.params.subscribe(this.getData.bind(this));
    // this.emitter.publish("isOverview", true);
    // this.emitter.subscribe("overview", this.parseData);
  }

  // getData(params: Params) {
  //   this.service.fetchData().subscribe(d => this.parseData(d, params));
  // }

  parseData(data: IEstate) {
    //this.data = this.getEstate(data["locations-data"][params.location].estates, params.id);
    this.data = data;
    //this.location = params.location;
    this.provider.getSavedEstates().then(d =>
      this.initBtn(d.some(d => d && d.id === +data.id)
      )
    );
    //this.overviewDataPublisher(params.location);
    //this.mapsDataPublisher();
    //this.similarDataPublisher();
  }
  // overviewDataPublisher(locId: string) {
  //   this.emitter.publish("overview", {
  //     data: this.data,
  //     location: locId
  //   });
  // }

  // mapsDataPublisher() {
  //   this.emitter.publish("maps", {
  //     long: this.data.longitude,
  //     lat: this.data.latitude
  //   })
  // }

  // similarDataPublisher() {
  //   this.emitter.publish("similar", {
  //     location: this.location,
  //     region: this.data.region
  //   })
  // }

  //Overview
  initBtn(isSelected: boolean) {
    this.isSelected = isSelected;
    this.setBtnValues();
  }
  setBtnValues() {
    this.btnColor = this.isSelected ? "outline" : "solid";
    this.btnTxt = this.isSelected ? remove : save;
  }
  // getEstate(estates: IEstate[], id: string) {
  //   return estates.find(e => e.id === +id);
  // }
  onClick() {
    this.isSelected = !this.isSelected;
    this.setBtnValues();
    this.isSelected ? this.saveEstate() : this.removeSaved();
    this.alert();
  }
  saveEstate() {
    this.provider.saveEstate(this.data.refNumber, this.data);
  }
  removeSaved() {
    this.provider.removeEstate(this.data.refNumber);
  }
  alert() {
    this.provider.alert({
      header: "",
      subHeader: "",
      message: this.isSelected ? "Estate saved! :)" : "Estate removed! :(",
      buttons: ["OK"]
    });
  }
}
