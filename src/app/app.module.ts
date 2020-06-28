﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './common/_helpers/fake-backend';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './common/_helpers/';
import { AppComponent } from './app.component';
import { AlertComponent } from './common/_components/alert.component';
import { HomeComponent } from './pages/home';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  declarations: [AppComponent, AlertComponent, HomeComponent, ProfileComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
