import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FlightResultsComponent } from './flight-results/flight-results.component';
// import { LoginComponent } from './component/login/login.component';
// import { DropdownComponent } from './components/dropdown/dropdown.component';


@NgModule({
    declarations: [
        AppComponent,
        FlightResultsComponent,
        // DropdownComponent,
        // LoginComponent,
        // DropdownComponent
    ],

    providers: [
    ],
    bootstrap: [AppComponent],
    imports: [
        DashboardModule,
        BrowserModule,
        AppRoutingModule,
        // DashboardModule,
        HttpClientModule,
        FormsModule,
        CommonModule
    ]
})
export class AppModule { }
