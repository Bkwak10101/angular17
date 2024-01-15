import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";


export class AppRoutes {
  menuButtonVisible: boolean;

  constructor(menuButtonVisible: boolean) {
    this.menuButtonVisible = menuButtonVisible;
  }
}

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  // {path: 'signup', component: SignupComponent},
  // {path: 'map', component: MapComponent},
  // {path: 'reservation', component: ReservationComponent},
  // {path: 'profile', component: ProfileComponent, data: new AppRoutes(true)},
  // {path: 'vehicle', component: VehicleComponent},
];
