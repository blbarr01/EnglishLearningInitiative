import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './features/game/game.component';
import { HomeComponent } from './features/home/home.component';
import { LearnComponent } from './features/learn/learn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed } from '@angular/core/testing';
import { TestComponent } from './features/test/test.component';
import { TalkToTextComponent } from './features/talk-to-text/talk-to-text.component';
import { LoginComponent } from './features/login/login.component';
import { SignupComponent } from './features/signup/signup.component';
import { CategorySelectorComponent } from './shared/components/category-selector/category-selector.component';
import { FlashcardComponent } from './shared/components/flashcard/flashcard.component';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { SiteMapComponent } from './features/site-map/site-map.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LessonsComponent } from './features/lessons/lessons.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    LearnComponent,
    TalkToTextComponent,
    TestComponent,
    LoginComponent,
    SignupComponent,
    CategorySelectorComponent,
    FlashcardComponent,
    AboutUsComponent,
    SiteMapComponent,
    LessonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
