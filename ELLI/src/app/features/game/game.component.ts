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
  gameRunning: boolean = false;
  gameMode: number = 1;
  gameDeck: any;
  deckSub: Subscription = Subscription.EMPTY;

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
  }

  counter: number = 40;


  startGame(){
    this.gameRunning = true;
    
      const clock$ = interval(1000)
      clock$.subscribe((t)=> {
        while(this.gameRunning){
          this.counter -= 1;
        }
      })
  }

  resetGame(){
    this.gameRunning = false;
    if(this.gameMode === 3){
      this.hardMode();
    } else if (this.gameMode === 2) {
      this.mediumMode();
    } else {
      this.easyMode();
    }
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
