import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './features/game/game.component';
import { HomeComponent } from './features/home/home.component';
import { LearnComponent } from './features/learn/learn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, GameComponent, HomeComponent, LearnComponent],
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, GameComponent, HomeComponent, LearnComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
