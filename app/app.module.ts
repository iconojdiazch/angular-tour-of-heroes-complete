import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from "./app-routing.module";

import { AppComponent }  from './app.component';
import { DashboardComponent } from "./dashboard.component";
import { HeroesComponent } from "./heroes.component";
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from "./hero.service";
import {HeroSearchComponent} from "./hero-search.component";

import { HomeComponent } from './home.component';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login.component';

import { CanActivateAuthGuard } from './can-activate.authguard';

@NgModule({
  imports:      [
  	BrowserModule,
	  FormsModule,
    HttpModule, 
    AppRoutingModule
  ],
  declarations: [
  	AppComponent,
    DashboardComponent,
	  HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    HomeComponent,
    LoginComponent
  ],
  providers: [ HeroService, AuthenticationService, CanActivateAuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
