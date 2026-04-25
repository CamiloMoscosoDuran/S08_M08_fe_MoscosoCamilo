import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { GamesComponent } from './components/games/games';
import { BenefitsComponent } from './components/benefits/benefits';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { FooterComponent } from './components/footer/footer';
import { EnrollmentsComponent } from './pages/enrollments/enrollments.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    HeroComponent,
    GamesComponent,
    BenefitsComponent,
    ContactFormComponent,
    FooterComponent,
    EnrollmentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
