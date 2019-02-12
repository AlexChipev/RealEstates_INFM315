import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/provider/provider.service';

@Component({
  selector: 'app-my-estates',
  templateUrl: './my-estates.component.html',
  styleUrls: ['./my-estates.component.scss']
})
export class MyEstatesComponent implements OnInit {

  title: string = "Saved Estates";
  data: any;

  constructor(private provider: ProviderService) {

  }

  ngOnInit() {
    this.provider.getSavedEstates().then((d) => {
      this.data = d
    });
  }
  
}
