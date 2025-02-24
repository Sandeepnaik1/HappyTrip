import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './dashboard/components/login/login.component';
import { SearchProcessComponent } from './dashboard/components/search-process/search-process.component';
import { FlightResultsComponent } from './flight-results/flight-results.component';
import { SearchSuccessComponent } from './dashboard/components/search-success/search-success.component';

const config: ExtraOptions = {
  useHash: false
};

const routes: Routes = [
  // { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'result',component:SearchSuccessComponent},
  { path: 'search', component: SearchProcessComponent },
  {path: 'flight',component:FlightResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, config)], // You can use the config variable directly
  exports: [RouterModule]
})
export class AppRoutingModule { }
