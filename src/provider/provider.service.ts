import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IData } from 'src/contracts/Data';
import { AlertController } from '@ionic/angular';
import { IAlert } from 'src/contracts/Alert';
import { IEstate } from 'src/contracts/Estate';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(
    private storage: Storage,
    private alertController: AlertController) {
  }

  saveEstate(refNo: string, estate: any) {
    this.storage.set(refNo, estate);
  }

  removeEstate(refNo: string) {
    this.storage.remove(refNo);
  }

  getSavedEstates() {
    return this.storage.keys()
      .then(keys => Promise.all(keys.map(k => this.storage.get(k))));
  }

  clearStorage() {
    this.storage.clear();
  }

  groupByRegion(data: IData) {
    let group = {};
    const estates = data.estates;
    estates.map(e => this.filterRegions(e, estates, group));
    return group;
  }

  private filterRegions(estate: IEstate, estates: IEstate[], group: any) {
    group[`${estate.region}`] = estates.filter(e => estate.region === e.region);
  }

  async alert(config: IAlert) {
    const alert = await this.alertController.create({
      ...config
    })
    await alert.present();
  }
}
