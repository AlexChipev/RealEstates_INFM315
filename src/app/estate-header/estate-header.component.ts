import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'estate-header',
  templateUrl: './estate-header.component.html',
  styleUrls: ['./estate-header.component.scss']
})
export class EstateHeaderComponent implements OnInit {

  _refNo: string;
  
  @Input()
  set refNo(rf: string) {
    this._refNo = rf;
  }
  constructor() { }

  ngOnInit() {
  }

}
