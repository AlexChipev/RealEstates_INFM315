import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyEstatesComponent } from './my-estates/my-estates.component';
import { FirebaseService } from 'services/firebase.service';
import { HttpClientModule } from '@angular/common/http';
import { SavedItemComponent } from './saved-item/saved-item.component';
import { SavedMenuItemComponent } from './saved-menu-item/saved-menu-item.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FindLocBtnComponent } from './find-loc-btn/find-loc-btn.component';
import { IonicStorageModule } from '@ionic/storage';
import { ProviderService } from 'src/provider/provider.service';
import { SelectLocationComponent } from './select-location/select-location.component';
import { EstatesComponent } from './estates/estates.component';
import { OverviewComponent } from './overview/overview.component';
import { EstateHeaderComponent } from './estate-header/estate-header.component';
import { EstateFooterComponent } from './estate-footer/estate-footer.component';
import { SimilarComponent } from './similar/similar.component';
import { HomeControllerComponent } from './home-controller/home-controller.component';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,
    MyEstatesComponent,
    SideMenuComponent,
    SavedItemComponent,
    SavedMenuItemComponent,
    FindLocBtnComponent,
    SelectLocationComponent,
    EstatesComponent,
    OverviewComponent,
    EstateHeaderComponent,
    EstateFooterComponent,
    SimilarComponent,
    HomeControllerComponent,
    MapsComponent
  ],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService,
    ProviderService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
