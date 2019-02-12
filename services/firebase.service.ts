import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  private _fbURL = "https://realestatesapp-b27f2.firebaseio.com/.json";

  constructor(private http: HttpClient) {
  }

  fetchData() {
    return this.http.get(this._fbURL);
  }
}
