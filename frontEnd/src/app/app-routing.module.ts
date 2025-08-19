// import { NgModule } from '@angular/core';
// import { ExtraOptions, RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './dashboard/components/login/login.component';
// import { SearchProcessComponent } from './dashboard/components/search-process/search-process.component';
// import { FlightResultsComponent } from './flight-results/flight-results.component';
// import { SearchSuccessComponent } from './dashboard/components/search-success/search-success.component';

// const config: ExtraOptions = {
//   useHash: false
// };

// const routes: Routes = [
//   // { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   {path:'result',component:SearchSuccessComponent},
//   { path: 'search', component: SearchProcessComponent },
//   {path: 'flight',component:FlightResultsComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes, { useHash: true })], // You can use the config variable directly
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }






import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './dashboard/components/login/login.component';
import { SearchProcessComponent } from './dashboard/components/search-process/search-process.component';
import { SearchSuccessComponent } from './dashboard/components/search-success/search-success.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchProcessComponent },
  { path: 'success', component: SearchSuccessComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false })  // 👈 Important
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
