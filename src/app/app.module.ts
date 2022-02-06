import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlloymobileLibraryModule } from './shared/alloymobile-library/alloymobile-library.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './public/login-page/login-page.component';
import { RegisterPageComponent } from './public/register-page/register-page.component';
import { IndexPageComponent } from './public/index-page/index-page.component';
import { NavbarComponent } from './shared/routing/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    IndexPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    AlloymobileLibraryModule,
    HttpClientModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
