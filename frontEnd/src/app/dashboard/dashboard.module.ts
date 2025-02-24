import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SearchProcessComponent } from './components/search-process/search-process.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchSuccessComponent } from './components/search-success/search-success.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    SearchProcessComponent,
    SearchSuccessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: []
})
export class DashboardModule { }
