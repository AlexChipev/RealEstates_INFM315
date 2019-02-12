import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'estate-footer',
  templateUrl: './estate-footer.component.html',
  styleUrls: ['./estate-footer.component.scss']
})
export class EstateFooterComponent implements OnInit {

  overviewParams: any
  mapParams: any
  similarParams: any

  @Input()
  set ovrParams(params: any) {
    this.overviewParams = params;
  }
  @Input()
  set mpParams(params: any) {
    this.mapParams = params;
  }
  @Input()
  set smlrParams(params: any) {
    this.similarParams = params;
  }
  constructor() { }

  ngOnInit() {
  }

}
