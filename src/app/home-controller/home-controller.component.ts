import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseService } from 'services/firebase.service';
import { IEstate } from 'src/contracts/Estate';
import { ProviderService } from 'src/provider/provider.service';

const remove = "remove from estates";
const save = "save to my estates";

@Component({
  selector: 'home-controller',
  templateUrl: './home-controller.component.html',
  styleUrls: ['./home-controller.component.scss']
})
export class HomeControllerComponent implements OnInit {

  //private data: IEstate
  locationId: string;

  data: any;
  cache: any;
  estate: IEstate;
  btnColor: string;
  saveBtn: string;
  isSelected: boolean;
  shouldDrawOverview: boolean;
  shouldDrawMaps: boolean;
  shouldDrawSimilar: boolean;
  isSwitched: boolean = true;
  segmentSelected: string = "All";
  location: string;
  regions: string[];
  locID: string;
  estateType: string;
  filterTarget: string;

  constructor(
    private route: ActivatedRoute,
    private service: FirebaseService,
    private provider: ProviderService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(this.getData.bind(this));
  }
  getData(params: Params) {
    this.service.fetchData().subscribe(d => this.parseData(d, params));
  }
  parseData(data: any, params: Params) {
    this.getSelectedEstate(data, params);
    this.getDataByLocation(data, params.location);
    this.shouldDrawOverview = true;
  }
  getEstate(estates: IEstate[], id: string) {
    return estates.find(e => e.id === +id);
  }
  getSelectedEstate(data, params) {
    this.estate = this.getEstate(data["locations-data"][params.location].estates, params.id);
    this.estateType = this.estate.type;
    this.locationId = params.location;
    this.provider.getSavedEstates().then(d =>
      this.initBtn(d.some(d => d && d.id === +params.id)
      )
    );
  }
  getDataByLocation(data, id) {
    this.location = data["locations-data"][id].location.name;
    this.locID = id;
    this.data = this.provider.groupByRegion(data["locations-data"][id]);
    this.cache = Object.assign(this.data, {});
    this.regions = Object.keys(this.data);
  }

  //overview
  initBtn(isSelected: boolean) {
    this.isSelected = isSelected;
    this.setBtnValues();
  }
  setBtnValues() {
    this.btnColor = this.isSelected ? "outline" : "solid";
    this.saveBtn = this.isSelected ? remove : save;
  }
  onClick() {
    this.isSelected = !this.isSelected;
    this.setBtnValues();
    this.isSelected ? this.saveEstate() : this.removeSaved();
    this.alert();
  }
  saveEstate() {
    this.provider.saveEstate(this.estate.refNumber, {...this.estate, location: this.locID, locName: this.location});
  }
  removeSaved() {
    this.provider.removeEstate(this.estate.refNumber);
  }
  alert() {
    this.provider.alert({
      header: "",
      subHeader: "",
      message: this.isSelected ? "Estate saved! :)" : "Estate removed! :(",
      buttons: ["OK"]
    });
  }
  clickOverview() {
    this.shouldDrawOverview = true;
    this.shouldDrawMaps = false;
    this.shouldDrawSimilar = false;
  }

  //maps
  clickMaps() {
    this.shouldDrawOverview = false;
    this.shouldDrawMaps = true;
    this.shouldDrawSimilar = false;
  }

  //similar
  clickSimilar() {
    this.shouldDrawOverview = false;
    this.shouldDrawMaps = false;
    this.shouldDrawSimilar = true;
  }
  onChange(target: string) {
    this[`filter${target}`]();
  }
  filterAll() {
    this.segmentSelected = "All";
    this.isSwitched && (this.data = this.cache)
    this.regions = this.getRegions();
  }
  filterRegion() {
    this.segmentSelected = "Region";
    this.regions = this.getRegions();
    this.isSwitched && (this.data = this.cache)
  }
  toggleSwitch() {
    this.isSwitched = !this.isSwitched;
    this.data = this.cache;
    this.regions = this.getRegions();
    !this.isSwitched && this.onSelect(this.estateType);
  }
  onSelect(target: string) {
    this.data = this.cache;
    this.regions = this.getRegions();
    this.filterEstates(target);
    this.estateType = target;
  }
  filterEstates(target: string) {
    const temp = {};
    this.regions.map(r => {
      this.data[r].filter(d => {
        d.type === target && (temp[r] = [d])
      })
    })
    this.data = temp;
  }
  getRegions() {
    return this.segmentSelected === "All" ? Object.keys(this.cache) : [this.estate.region];
  }
}
