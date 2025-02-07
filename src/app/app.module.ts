import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { LoginComponent } from './component/login/login.component';
// import { DropdownComponent } from './components/dropdown/dropdown.component';


@NgModule({
    declarations: [
        AppComponent,
        // DropdownComponent,
        // LoginComponent,
        // DropdownComponent
    ],

    providers: [
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DashboardModule,
        HttpClientModule,

    ]
})
export class AppModule { }
