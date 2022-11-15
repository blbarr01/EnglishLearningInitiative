import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './features/game/game.component';
import { HomeComponent } from './features/home/home.component';
import { LearnComponent } from './features/learn/learn.component';
import { TestComponent } from './features/test/test.component';
import { TalkToTextComponent } from './features/talk-to-text/talk-to-text.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "game",
    component: GameComponent,
    pathMatch: "full",
  },
  {
    path: "learn",
    component: LearnComponent,
    pathMatch: "full",
  },
  {
    path: "test",
    component: TestComponent,
    pathMatch: "full",
  },
  {
    path: "speech",
    component: TalkToTextComponent,
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "home",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
