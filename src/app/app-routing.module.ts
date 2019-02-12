import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyEstatesComponent } from './my-estates/my-estates.component';
import { SelectLocationComponent } from './select-location/select-location.component';
import { EstatesComponent } from './estates/estates.component';
import { OverviewComponent } from './overview/overview.component';
import { SimilarComponent } from './similar/similar.component';
import { HomeControllerComponent } from './home-controller/home-controller.component';

const routes: Routes = [
  { path: '', component: MyEstatesComponent, pathMatch: 'full' },
  { path: "locations", component: SelectLocationComponent },
  { path: "estates/:id", component: EstatesComponent },
  { path: "home/:id/:location", component: HomeControllerComponent },
  { path: "similar/:id/:location", component: SimilarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
