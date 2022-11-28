import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { Deck } from 'src/app/shared/models';
import { DecksService } from 'src/app/shared/services/decks.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, OnDestroy {
  index: number = 0;
  gameMode: number = 1;
  gameDeck: any;
  deckSub: Subscription = Subscription.EMPTY;
  clockSub: Subscription = Subscription.EMPTY;

  constructor(private router: Router, private decksService: DecksService) {}
 
  showHome(){
    this.router.navigateByUrl("");
  }

  ngOnInit(): void {
    this.deckSub = this.decksService.deck$.subscribe((d) => {
      this.gameDeck = d;
    })    
  }

  ngOnDestroy(): void {
    this.deckSub?.unsubscribe();
    this.clockSub?.unsubscribe();
  }

  counter: number = 40;


  startGame(){    
      const clock$ = interval(1000)
      this.clockSub = clock$.subscribe((t)=> {
          this.counter -= 1;
          if(this.counter <= 0){
            console.log("Game Over");
            this.resetGame();
          }
      })
  }

  resetGame(){
    this.index = 0;
    this.clockSub?.unsubscribe();
    if(this.gameMode === 3){
      this.hardMode();
    } else if (this.gameMode === 2) {
      this.mediumMode();
    } else {
      this.easyMode();
    }
  }

  skipCard(){
    this.counter -= 4;
    this.index++;
  }

  submitAnswer(){

  }

  hardMode(){
    this.counter = 20;
    this.gameMode = 3;
  }

  mediumMode(){
    this.counter = 30;
    this.gameMode = 2;
  }

  easyMode(){
    this.counter = 40;
    this.gameMode = 1;
  } 
}
